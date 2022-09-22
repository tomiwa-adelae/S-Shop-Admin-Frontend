import React from 'react';

const PrimarySpinner = () => {
   return (
      <div className="spinner-wrapper">
         <div className="spinner-primary"></div>
      </div>
   );
};

const WhiteSpinner = () => {
   return (
      <div className="spinner-wrapper">
         <div className="spinner-white"></div>
      </div>
   );
};

const SmallWhiteSpinner = () => {
   return (
      <div className="spinner-wrapper">
         <div className="spinner-white-small"></div>
      </div>
   );
};

export { PrimarySpinner, WhiteSpinner, SmallWhiteSpinner };
