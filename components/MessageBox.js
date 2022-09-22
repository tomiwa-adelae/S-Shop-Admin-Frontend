import React from 'react';

const SuccessMessageBox = ({ msg }) => {
   return (
      <div className="success-msg p-1 my-0">
         <h6>{msg}</h6>
      </div>
   );
};

const ErrorMessageBox = ({ msg }) => {
   return (
      <div className="danger-msg p-1 my-0">
         <h6>{msg}</h6>
      </div>
   );
};

export { SuccessMessageBox, ErrorMessageBox };
