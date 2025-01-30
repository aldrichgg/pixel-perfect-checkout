import React from 'react';

interface ProgressIndicatorProps {
  currentStep?: number;
}

const ProgressIndicator = ({ currentStep = 1 }: ProgressIndicatorProps) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center flex-1">
        <div className={`w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-primary text-white' : 'bg-progress-inactive text-gray-500'} flex items-center justify-center text-sm`}>
          1
        </div>
        <div className={`progress-line ${currentStep >= 2 ? 'bg-primary' : 'bg-progress-inactive'}`}></div>
        <div className={`w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-primary text-white' : 'bg-progress-inactive text-gray-500'} flex items-center justify-center text-sm`}>
          2
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;