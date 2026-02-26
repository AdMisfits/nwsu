import { Step } from '@/types';

export const BRAND = {
  name: 'NWS University',
  shortName: 'NWSU',
  supportEmail: 'support@nationalwateralliance.com',
  parentCompany: 'National Water Systems',
};

export const QUIZ_PASS_THRESHOLD = 0.8; // 80% for chapter quizzes
export const EXAM_PASS_THRESHOLD = 0.85; // 85% for final exam
export const TOTAL_CHAPTERS = 12;

function buildChapterSteps(): Step[] {
  const chapterSteps: Step[] = [];
  const chapterTitles = [
    'Introduction to Water Treatment',
    'Water Chemistry Basics',
    'Water Quality Testing',
    'Treatment Technologies',
    'Filtration Systems',
    'Disinfection Methods',
    'Water Softening',
    'Reverse Osmosis Systems',
    'Distribution & Plumbing',
    'Regulatory Compliance',
    'Customer Consultation',
    'Installation & Maintenance',
  ];

  for (let i = 0; i < TOTAL_CHAPTERS; i++) {
    chapterSteps.push({
      type: 'chapter_content',
      label: `Ch ${i + 1}: ${chapterTitles[i]}`,
      group: 'Training',
      chapterIndex: i,
    });
    chapterSteps.push({
      type: 'chapter_quiz',
      label: `Ch ${i + 1} Quiz`,
      group: 'Training',
      chapterIndex: i,
    });
    chapterSteps.push({
      type: 'quiz_results',
      label: `Ch ${i + 1} Results`,
      group: 'Training',
      chapterIndex: i,
    });
  }

  return chapterSteps;
}

export const STEPS_CONFIG: Step[] = [
  // Getting Started
  { type: 'welcome', label: 'Welcome', group: 'Getting Started' },
  { type: 'registration', label: 'Registration', group: 'Getting Started' },
  // Training chapters (36 steps: 12 chapters × 3 steps each)
  ...buildChapterSteps(),
  // Certification
  { type: 'final_exam', label: 'Final Exam', group: 'Certification' },
  { type: 'exam_results', label: 'Exam Results', group: 'Certification' },
  { type: 'certification', label: 'Certification', group: 'Certification' },
  { type: 'complete', label: 'Complete', group: 'Certification' },
];

export const EXTERNAL_LINKS = {
  support: `mailto:${BRAND.supportEmail}`,
};
