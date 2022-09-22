import React from 'react';
import { WhiteSpinner } from '../Spinner';

const LoadingModal = () => {
   return (
      <div className="loading-modal">
         <WhiteSpinner />;
      </div>
   );
};

export default LoadingModal;
