/** @format */
import React from "react";

const CouponModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">Apply Coupons</h2>
        <input
          type="text"
          placeholder="Enter a coupon code"
          className="w-full border rounded px-3 py-2 mb-3"
        />
        <button className="bg-pink-500 w-full py-2 rounded text-white font-semibold">
          Apply
        </button>
        <p className="mt-3 text-gray-500">Available Coupons (0)</p>
      </div>
    </div>
  );
};

export default CouponModal;
