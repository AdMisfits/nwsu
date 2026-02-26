-- NWSU Training Platform Schema

-- Trainees table
CREATE TABLE trainees (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  state TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Training progress
CREATE TABLE training_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trainee_id UUID REFERENCES trainees(id) ON DELETE CASCADE UNIQUE,
  current_step INTEGER DEFAULT 0,
  certification_acknowledged BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Chapter quiz scores
CREATE TABLE chapter_quiz_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trainee_id UUID REFERENCES trainees(id) ON DELETE CASCADE,
  chapter_index INTEGER NOT NULL,
  score INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  attempt_count INTEGER DEFAULT 1,
  answers_json JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(trainee_id, chapter_index)
);

-- Final exam scores
CREATE TABLE final_exam_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trainee_id UUID REFERENCES trainees(id) ON DELETE CASCADE UNIQUE,
  score INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  attempt_count INTEGER DEFAULT 1,
  answers_json JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX idx_trainees_email ON trainees(email);
CREATE INDEX idx_chapter_quiz_scores_trainee ON chapter_quiz_scores(trainee_id);
CREATE INDEX idx_final_exam_scores_trainee ON final_exam_scores(trainee_id);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trainees_updated_at
  BEFORE UPDATE ON trainees
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER training_progress_updated_at
  BEFORE UPDATE ON training_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER chapter_quiz_scores_updated_at
  BEFORE UPDATE ON chapter_quiz_scores
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER final_exam_scores_updated_at
  BEFORE UPDATE ON final_exam_scores
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
