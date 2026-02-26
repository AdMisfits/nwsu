'use client';

import { useState } from 'react';
import { useTraining } from '@/context/TrainingContext';
import { Footer } from '@/components/layout/Footer';
import { Button, Card, CardTitle, CardText, AwardIcon, ArrowRightIcon } from '@/components/ui';
import { Checkbox } from '@/components/ui/Checkbox';

export function CertificationStep() {
  const { state, acknowledgeCertification, nextStep } = useTraining();
  const [acknowledged, setAcknowledged] = useState(state.certificationAcknowledged);

  const handleContinue = () => {
    if (!acknowledged) return;
    acknowledgeCertification();
    nextStep();
  };

  return (
    <>
      <div className="animate-fadeIn">
        <div className="text-center mb-8">
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#f59e0b]/20">
            <AwardIcon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
          </div>

          <h1 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.03em] text-navy-950 mb-2">
            Certification Acknowledgment
          </h1>

          <p className="text-[17px] text-slate-500 max-w-md mx-auto leading-[1.6]">
            Congratulations on completing all training modules and passing the final exam!
          </p>
        </div>

        <Card className="mb-6">
          <CardTitle icon={<AwardIcon className="w-5 h-5" />}>
            NWS Water Specialist Certification
          </CardTitle>
          <CardText>
            By acknowledging below, you confirm that you have completed all training chapters,
            passed all chapter quizzes and the final certification exam, and understand your
            responsibilities as an NWS Water Specialist.
          </CardText>
        </Card>

        <div className="bg-white rounded-3xl shadow-sm p-6 space-y-4">
          <h3 className="text-[15px] font-semibold text-navy-950">As a certified NWS Water Specialist, I agree to:</h3>
          <ul className="space-y-2">
            {[
              'Apply the knowledge learned in this training program in my daily work',
              'Follow NWS standards and procedures for all water assessments',
              'Present honest and accurate information to customers',
              'Comply with all applicable local, state, and federal regulations',
              'Continue my education through ongoing NWS training programs',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[14px] text-slate-600 leading-[1.6]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 px-2">
          <Checkbox
            checked={acknowledged}
            onChange={() => setAcknowledged(!acknowledged)}
            label="I acknowledge and agree to the terms above and certify that I have completed all required training."
          />
        </div>
      </div>

      <Footer>
        <Button
          onClick={handleContinue}
          disabled={!acknowledged}
          icon={<ArrowRightIcon className="w-5 h-5" />}
        >
          Complete Certification
        </Button>
      </Footer>
    </>
  );
}
