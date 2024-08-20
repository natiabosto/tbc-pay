import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { WizardSchema } from '../../schemas/WizardSchema';
import SuccessStep from './SuccessStep';
import Input from './Input';
import WizardController from './WizardController';

const wizardContent = [
  <Input key='username' id='username' label='მომხმარებლის სახელი' />,
  <Input key='password' id='password' label='პაროლი' />,
  <Input key='email' id='email' label='ელ.ფოსტა' />,
  <SuccessStep key='success' />,
];

const Wizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({
    resolver: yupResolver(WizardSchema),
    mode: 'onTouched',
  });

  const hasErrors = Object.keys(methods.formState.errors).length > 0;

  const isNextStepDisabled =
    hasErrors || currentStep === wizardContent.length - 1;
  const isPrevStepDisabled = currentStep === 0;

  const handleNextStep = () => {
    methods.handleSubmit(onSubmit);
    setCurrentStep((step) => (isNextStepDisabled ? step : step + 1));
  };
  const handlePrevStep = () => {
    setCurrentStep((step) => (isPrevStepDisabled ? step : step - 1));
  };

  const onSubmit = (data: unknown) => {
    if (isNextStepDisabled) {
      console.log('Form submitted successfully:', data);
    } else {
      handleNextStep();
    }
  };

  return (
    <FormProvider {...methods}>
      <div className='max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mt-5'>
        <div className='p-6'>
          <h2 className='text-xl font-semibold mb-2'>რეგისტრაცია</h2>
          <div className='flex items-center min-h-40'>
            {wizardContent[currentStep]}
          </div>
          <WizardController
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            isPrevStepDisabled={isPrevStepDisabled}
            isNextStepDisabled={isNextStepDisabled}
          />
        </div>
      </div>
    </FormProvider>
  );
};

export default Wizard;
