'use client';

import { useState } from 'react';
import { useTraining } from '@/context/TrainingContext';
import { Footer } from '@/components/layout/Footer';
import { Button, ArrowRightIcon } from '@/components/ui';
import { FormField } from '@/components/ui/FormField';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
];

export function RegistrationStep() {
  const { state, setTraineeInfo, nextStep } = useTraining();
  const [email, setEmail] = useState(state.traineeEmail || '');
  const [name, setName] = useState(state.traineeName || '');
  const [phone, setPhone] = useState(state.traineePhone || '');
  const [city, setCity] = useState(state.traineeCity || '');
  const [usState, setUsState] = useState(state.traineeState || '');
  const [error, setError] = useState('');

  const emailValid = email.includes('@') && email.includes('.');
  const isValid = emailValid && name.trim().length > 0 && phone.trim().length > 0 && city.trim().length > 0 && usState.length > 0;

  const handleContinue = () => {
    if (!isValid) {
      setError('Please fill in all required fields');
      return;
    }
    setTraineeInfo({
      email: email.trim().toLowerCase(),
      name: name.trim(),
      phone: phone.trim(),
      city: city.trim(),
      state: usState,
    });
    nextStep();
  };

  return (
    <>
      <div className="animate-fadeIn">
        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#3b82f6]/20">
          <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>

        <h1 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.03em] text-center text-navy-950 mb-3">
          Register for Training
        </h1>

        <p className="text-[17px] text-slate-500 text-center max-w-sm mx-auto mb-10 leading-[1.6]">
          Enter your information to begin your Water Specialist training program.
        </p>

        <div className="space-y-0">
          <FormField
            label="Full Name"
            value={name}
            onChange={(v) => { setName(v); setError(''); }}
            placeholder="John Smith"
            required
            autoFocus
            autoComplete="name"
          />
          <FormField
            label="Email"
            value={email}
            onChange={(v) => { setEmail(v); setError(''); }}
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
          <FormField
            label="Phone"
            value={phone}
            onChange={(v) => { setPhone(v); setError(''); }}
            type="tel"
            placeholder="(555) 123-4567"
            required
            autoComplete="tel"
          />
          <div className="grid grid-cols-2 gap-3">
            <FormField
              label="City"
              value={city}
              onChange={(v) => { setCity(v); setError(''); }}
              placeholder="Your city"
              required
            />
            <FormField
              label="State"
              value={usState}
              onChange={(v) => { setUsState(v); setError(''); }}
              type="select"
              options={US_STATES}
              placeholder="Select state"
              required
            />
          </div>
        </div>

        {error && (
          <p className="mt-2 text-[13px] text-danger">{error}</p>
        )}
      </div>

      <Footer>
        <Button
          onClick={handleContinue}
          disabled={!isValid}
          icon={<ArrowRightIcon className="w-5 h-5" />}
        >
          Begin Training
        </Button>
      </Footer>
    </>
  );
}
