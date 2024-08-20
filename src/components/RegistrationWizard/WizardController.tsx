import React, { useState } from 'react';

export interface WizardControllerInterface {
  onPrevStep: () => void;
  onNextStep: () => void;
  isPrevStepDisabled: boolean;
  isNextStepDisabled: boolean;
}

const WizardController: React.FC<WizardControllerInterface> = ({
  onPrevStep,
  onNextStep,
  isPrevStepDisabled,
  isNextStepDisabled,
}) => {
  const [loading, setLoading] = useState(false);

  const handleNextClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onNextStep();
    }, 2000);
  };

  return (
    <div className='flex gap-20 justify-between mt-8'>
      <button
        className='btn flex-1'
        onClick={onPrevStep}
        disabled={isPrevStepDisabled}
      >
        უკან
      </button>
      <button
        onClick={handleNextClick}
        disabled={isNextStepDisabled || loading}
        className='btn flex-1 flex justify-center'
      >
        {loading ? (
          <>
            <svg
              className='animate-spin h-5 w-5 mr-2 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
              ></path>
            </svg>
          </>
        ) : (
          'შემდეგი'
        )}
      </button>
    </div>
  );
};

export default WizardController;
