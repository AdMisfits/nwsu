import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, isSupabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

// Save a chapter quiz score or final exam score
export async function POST(request: NextRequest) {
  try {
    const { email, type, chapterIndex, score, passed, attemptCount, answers } = await request.json();

    if (!email || !type) {
      return NextResponse.json({ error: 'Email and type are required' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ success: true, stored: false });
    }

    try {
      const supabase = createServerClient();

      // Get trainee ID
      const { data: trainee } = await supabase
        .from('trainees')
        .select('id')
        .eq('email', email)
        .single();

      if (!trainee) {
        return NextResponse.json({ error: 'Trainee not found' }, { status: 404 });
      }

      if (type === 'chapter') {
        if (chapterIndex === undefined) {
          return NextResponse.json({ error: 'chapterIndex is required for chapter quizzes' }, { status: 400 });
        }

        await supabase
          .from('chapter_quiz_scores')
          .upsert({
            trainee_id: trainee.id,
            chapter_index: chapterIndex,
            score,
            passed,
            attempt_count: attemptCount,
            answers_json: answers,
          }, { onConflict: 'trainee_id,chapter_index' });
      } else if (type === 'exam') {
        await supabase
          .from('final_exam_scores')
          .upsert({
            trainee_id: trainee.id,
            score,
            passed,
            attempt_count: attemptCount,
            answers_json: answers,
          }, { onConflict: 'trainee_id' });
      } else {
        return NextResponse.json({ error: 'Invalid type. Use "chapter" or "exam"' }, { status: 400 });
      }

      return NextResponse.json({ success: true, stored: true });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ success: true, stored: false });
    }
  } catch (error) {
    console.error('Quiz score save error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
