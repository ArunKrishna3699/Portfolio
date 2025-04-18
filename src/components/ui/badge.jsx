// src/components/ui/Badge.jsx
import React from 'react';

export const Badge = ({ text }) => {
  return (
    <span className="badge bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
      {text}
    </span>
  );
};
