import React from 'react';

import'./error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">BOOM!</span>
      <span>Something went wrong!</span>
      <span>(But we have already known about this problem and sent our bot to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
