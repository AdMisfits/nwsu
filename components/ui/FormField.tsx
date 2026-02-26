'use client';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: string[];
  autoFocus?: boolean;
  autoComplete?: string;
}

export function FormField({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
  disabled,
  options,
  autoFocus,
  autoComplete,
}: FormFieldProps) {
  const inputClasses =
    'w-full px-4 py-3.5 text-[15px] bg-white border-[1.5px] border-slate-300 rounded-2xl text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 disabled:bg-neutral-100 disabled:text-slate-400';

  return (
    <div className="mb-4">
      <label className="block text-[13px] font-semibold text-slate-600 mb-1.5">
        {label}
        {required && <span className="text-danger ml-0.5">*</span>}
      </label>
      {type === 'select' && options ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={inputClasses}
        >
          <option value="">{placeholder || 'Select...'}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={inputClasses}
        />
      )}
    </div>
  );
}
