import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, isSupabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

// Save training progress
export async function POST(request: NextRequest) {
  try {
    const { email, currentStep, certificationAcknowledged } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: true, stored: false });
    }

    try {
      const supabase = createServerClient();

      // Upsert trainee
      const { data: trainee, error: traineeError } = await supabase
        .from('trainees')
        .upsert({ email }, { onConflict: 'email' })
        .select('id')
        .single();

      if (traineeError || !trainee) {
        console.error('Failed to upsert trainee:', traineeError);
        return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 });
      }

      // Upsert progress
      await supabase
        .from('training_progress')
        .upsert({
          trainee_id: trainee.id,
          current_step: currentStep,
          certification_acknowledged: certificationAcknowledged || false,
        }, { onConflict: 'trainee_id' });

      return NextResponse.json({ success: true, stored: true });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ success: true, stored: false });
    }
  } catch (error) {
    console.error('Progress save error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Load training progress
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ progress: null });
    }

    try {
      const supabase = createServerClient();

      const { data: trainee } = await supabase
        .from('trainees')
        .select('id')
        .eq('email', email)
        .single();

      if (!trainee) {
        return NextResponse.json({ progress: null });
      }

      const { data: progress } = await supabase
        .from('training_progress')
        .select('*')
        .eq('trainee_id', trainee.id)
        .single();

      return NextResponse.json({
        progress: progress ? {
          currentStep: progress.current_step,
          certificationAcknowledged: progress.certification_acknowledged,
          completedAt: progress.completed_at,
        } : null,
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ progress: null });
    }
  } catch (error) {
    console.error('Progress load error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
