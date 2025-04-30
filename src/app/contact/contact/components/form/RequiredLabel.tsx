import React from "react";

const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="flex items-center">
    {children}
    <span className="text-red-500 ml-1">*</span>
  </span>
);

export default RequiredLabel;