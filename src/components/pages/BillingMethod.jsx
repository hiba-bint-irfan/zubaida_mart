import React from 'react';

const BillingMethod = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, such as sending data to a server
    console.log('Payment Method: Cash on Delivery');
    // You can send the form data to your backend server for further processing
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-lg font-bold mb-4">Billing Method</h2>
      <p className="mb-4">Payment Method: Cash on Delivery</p>
      <form onSubmit={handleFormSubmit}>
      </form>
    </div>
  );
};

export default BillingMethod;
