import { forwardRef } from "react";

const LogoutIcon = forwardRef(({ ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7.707 8.707L5.414 11H17a1 1 0 010 2H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414zM21 1h-8a1 1 0 000 2h7v18h-7a1 1 0 000 2h8a1 1 0 001-1V2a1 1 0 00-1-1z"></path>
    </svg>
  );
});

export default LogoutIcon;