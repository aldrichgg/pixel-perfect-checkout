import React from 'react';

const ProgressIndicator = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center flex-1">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">
          1
        </div>
        <div className="progress-line bg-primary"></div>
        <div className="w-8 h-8 rounded-full bg-progress-inactive text-gray-500 flex items-center justify-center text-sm">
          2
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;