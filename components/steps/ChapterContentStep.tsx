'use client';

import { useTraining } from '@/context/TrainingContext';
import { Footer } from '@/components/layout/Footer';
import { Button, Card, CardTitle, CardText, ArrowRightIcon, InfoIcon } from '@/components/ui';
import { CHAPTERS } from '@/lib/chapters';

export function ChapterContentStep() {
  const { currentStepData, nextStep } = useTraining();
  const chapterIndex = currentStepData.chapterIndex ?? 0;
  const chapter = CHAPTERS[chapterIndex];

  return (
    <>
      <div className="animate-fadeIn">
        <div className="mb-2 text-[13px] font-semibold text-accent uppercase tracking-wide">
          Chapter {chapterIndex + 1} of {CHAPTERS.length}
        </div>

        <h1 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.03em] text-navy-950 mb-2">
          {chapter.title}
        </h1>

        <p className="text-[16px] text-slate-500 mb-8 leading-[1.6]">
          {chapter.subtitle}
        </p>

        <div className="space-y-6">
          {chapter.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-[18px] font-bold text-navy-950 mb-2">{section.title}</h2>
              <p className="text-[15px] text-slate-600 leading-[1.7] mb-3">{section.content}</p>
              {section.bullets && (
                <ul className="space-y-1.5 ml-1">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-[14px] text-slate-600 leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {chapter.callouts?.map((callout, idx) => (
            <Card
              key={idx}
              variant={callout.type === 'warning' ? 'warning' : 'info'}
              className="mt-4"
            >
              <CardTitle icon={<InfoIcon className="w-5 h-5" />}>
                {callout.title}
              </CardTitle>
              <CardText>{callout.content}</CardText>
            </Card>
          ))}

          {chapter.keyTerms && (
            <div className="mt-6">
              <h2 className="text-[18px] font-bold text-navy-950 mb-3">Key Terms</h2>
              <div className="space-y-2">
                {Object.entries(chapter.keyTerms).map(([term, definition]) => (
                  <div key={term} className="bg-neutral-100 rounded-2xl px-4 py-3">
                    <span className="text-[14px] font-semibold text-navy-950">{term}</span>
                    <span className="text-[14px] text-slate-500"> — {definition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer>
        <Button onClick={nextStep} icon={<ArrowRightIcon className="w-5 h-5" />}>
          Take the Quiz
        </Button>
      </Footer>
    </>
  );
}
