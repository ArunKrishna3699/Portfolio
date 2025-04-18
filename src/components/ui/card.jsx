// src/components/ui/Card.jsx
import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden p-6">
      {children}
    </div>
  );
};

export const CardContent = ({ content }) => {
  return <div className="card-content text-gray-700">{content}</div>;
};
