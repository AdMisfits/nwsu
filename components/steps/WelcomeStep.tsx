'use client';

import { useTraining } from '@/context/TrainingContext';
import { Footer } from '@/components/layout/Footer';
import { Button, Card, CardTitle, CardText, BookIcon, ClockIcon, ShieldIcon, ArrowRightIcon } from '@/components/ui';
import { TOTAL_CHAPTERS } from '@/lib/constants';

export function WelcomeStep() {
  const { nextStep } = useTraining();

  return (
    <>
      <div className="animate-fadeIn">
        <img src="/logo.png" alt="NWS University" className="w-20 h-20 lg:w-24 lg:h-24 object-contain mx-auto mb-8" />

        <h1 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.03em] text-center text-navy-950 mb-3">
          Welcome to NWS University
        </h1>

        <p className="text-[17px] text-slate-500 text-center max-w-sm mx-auto mb-10 leading-[1.6]">
          Complete your Water Specialist training and earn your NWS certification. {TOTAL_CHAPTERS} chapters of expert knowledge await.
        </p>

        <Card className="mb-4">
          <CardTitle icon={<BookIcon className="w-5 h-5" />}>
            {TOTAL_CHAPTERS} Training Chapters
          </CardTitle>
          <CardText>
            Each chapter covers essential water treatment knowledge with a quiz to test your understanding. Pass all chapters to unlock the final exam.
          </CardText>
        </Card>

        <Card className="mb-4">
          <CardTitle icon={<ClockIcon className="w-5 h-5" />}>
            Go at your own pace
          </CardTitle>
          <CardText>
            Your progress saves automatically. Close the browser and pick up where you left off anytime.
          </CardText>
        </Card>

        <Card>
          <CardTitle icon={<ShieldIcon className="w-5 h-5" />}>
            Earn your certification
          </CardTitle>
          <CardText>
            Pass the final exam with 85% or higher to earn your official NWS Water Specialist certification.
          </CardText>
        </Card>
      </div>

      <Footer>
        <Button onClick={nextStep} icon={<ArrowRightIcon className="w-5 h-5" />}>
          Start Training
        </Button>
      </Footer>
    </>
  );
}
