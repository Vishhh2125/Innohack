import React from 'react';

// Utility function to combine className strings
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function cn(...classes) {
  return classNames(...classes);
}
