import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, isSupabaseConfigured } from '@/lib/supabase';
import { pushCertificationToGHL } from '@/lib/ghl';

export const dynamic = 'force-dynamic';

// Record certification completion and push to GHL
export async function POST(request: NextRequest) {
  try {
    const { email, name, phone, city, state: usState, examScore, chaptersCompleted, totalChapters } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Mark training as complete in Supabase
    if (isSupabaseConfigured()) {
      try {
        const supabase = createServerClient();

        const { data: trainee } = await supabase
          .from('trainees')
          .upsert({
            email,
            name: name || '',
            phone: phone || '',
            city: city || '',
            state: usState || '',
          }, { onConflict: 'email' })
          .select('id')
          .single();

        if (trainee) {
          await supabase
            .from('training_progress')
            .upsert({
              trainee_id: trainee.id,
              certification_acknowledged: true,
              completed_at: new Date().toISOString(),
            }, { onConflict: 'trainee_id' });
        }
      } catch (dbError) {
        console.error('Database error during certification:', dbError);
      }
    }

    // Push to GHL
    const ghlResult = await pushCertificationToGHL(email, {
      examScore,
      chaptersCompleted,
      totalChapters,
      city,
      state: usState,
    });

    return NextResponse.json({
      success: true,
      ghlPushed: ghlResult,
    });
  } catch (error) {
    console.error('Certification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
