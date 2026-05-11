import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

type FormData = {
  safariType: string;
  timeframe: string;
  groupSize: string;
  name: string;
  email: string;
  message: string;
};

const initialFormData: FormData = {
  safariType: '',
  timeframe: '',
  groupSize: '',
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleNext = () => {
    if (!isStepValid()) {
      if (step === 4 && formData.name.trim() === '') {
        setError('Please enter your name.');
      } else if (step === 5) {
        if (formData.email.trim() === '') {
          setError('Please enter your email address.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError('Please enter a valid email address.');
        }
      }
      return;
    }
    setError(null);
    if (step < 6) setStep(step + 1);
    else handleSubmit();
  };

  const handleBack = () => {
    setError(null);
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return formData.safariType !== '';
      case 2: return formData.timeframe !== '';
      case 3: return formData.groupSize !== '';
      case 4: return formData.name.trim() !== '';
      case 5: return formData.email.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 6: return true; // Message is optional
      default: return false;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark uppercase mb-6">What kind of safari are you interested in?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Dangerous Game', 'Plains Game', 'Speciality Game', 'Fishing Safari', 'Caprivi Strip', 'Tailored Safari', '2026 Safari Special', 'Father & Son Special'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    updateFormData('safariType', type);
                    setTimeout(() => setStep(2), 300);
                  }}
                  className={`p-4 border-2 text-left font-bold uppercase text-sm transition-all ${
                    formData.safariType === type 
                      ? 'border-primary bg-primary text-white' 
                      : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark uppercase mb-6">When are you planning to visit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Within 3 months', '3-6 months', '6-12 months', '1+ year from now'].map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    updateFormData('timeframe', time);
                    setTimeout(() => setStep(3), 300);
                  }}
                  className={`p-4 border-2 text-left font-bold uppercase text-sm transition-all ${
                    formData.timeframe === time 
                      ? 'border-primary bg-primary text-white' 
                      : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark uppercase mb-6">How many people in your group?</h3>
            <div className="grid grid-cols-2 gap-4">
              {['1 Person', '2 People', '3-4 People', '5+ People'].map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    updateFormData('groupSize', size);
                    setTimeout(() => setStep(4), 300);
                  }}
                  className={`p-4 border-2 text-center font-bold uppercase text-sm transition-all ${
                    formData.groupSize === size 
                      ? 'border-primary bg-primary text-white' 
                      : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark uppercase mb-6">What is your name?</h3>
            <div>
              <input
                type="text"
                autoFocus
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                className={`w-full px-4 py-4 border-2 outline-none transition-all text-lg ${
                  error ? 'border-primary' : 'border-gray-200 focus:border-dark'
                }`}
                placeholder="John Doe"
              />
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark uppercase mb-6">What is your email address?</h3>
            <div>
              <input
                type="email"
                autoFocus
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                className={`w-full px-4 py-4 border-2 outline-none transition-all text-lg ${
                  error ? 'border-primary' : 'border-gray-200 focus:border-dark'
                }`}
                placeholder="john@example.com"
              />
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div
            key="step6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark uppercase mb-6">Any specific animals or additional details? (Optional)</h3>
            <div>
              <textarea
                rows={5}
                autoFocus
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 focus:border-primary outline-none transition-all text-lg resize-none"
                placeholder="I am specifically interested in hunting..."
              />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-primary text-2xl md:text-3xl font-bold uppercase mb-4">Plan Your Safari</h4>
          <p className="text-gray-600 text-lg leading-relaxed">
            Let's build your dream African adventure. Answer a few quick questions so we can tailor the perfect experience for you.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-primary relative min-h-[400px] flex flex-col">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-grow flex flex-col items-center justify-center text-center space-y-6"
            >
              <CheckCircle2 className="w-20 h-20 text-green-500" />
              <h3 className="text-3xl font-bold text-dark uppercase">Request Received!</h3>
              <p className="text-gray-600 text-lg">
                Thank you, {formData.name}. We've received your inquiry for a {formData.safariType} and will be in touch shortly at {formData.email} with more details.
              </p>
              <button
                onClick={() => {
                  setFormData(initialFormData);
                  setStep(1);
                  setIsSubmitted(false);
                }}
                className="mt-8 bg-dark hover:bg-primary text-white px-8 py-3 font-bold uppercase tracking-widest text-sm transition-colors"
              >
                Start Over
              </button>
            </motion.div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                  <span>Step {step} of 6</span>
                  <span>{Math.round((step / 6) * 100)}% Completed</span>
                </div>
                <div className="w-full bg-gray-200 h-2">
                  <div 
                    className="bg-primary h-2 transition-all duration-500 ease-out"
                    style={{ width: `${(step / 6) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex-grow relative">
                <AnimatePresence mode="wait">
                  {renderStep()}
                </AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary font-bold mt-4 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="mt-10 flex justify-between items-center pt-6 border-t border-gray-100">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`flex items-center space-x-2 font-bold uppercase text-sm transition-colors ${
                    step === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
                
                {step >= 4 && (
                  <button
                    onClick={handleNext}
                    className={`flex items-center space-x-2 px-8 py-3 font-bold uppercase text-sm transition-colors ${
                      isStepValid() 
                        ? 'bg-primary hover:bg-primary-dark text-white' 
                        : 'bg-dark text-white hover:bg-darker'
                    }`}
                  >
                    <span>{step === 6 ? 'Submit Request' : 'Next'}</span>
                    {step < 6 && <ChevronRight className="w-5 h-5" />}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
