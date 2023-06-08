import { forwardRef } from "react";

const SendIcon = forwardRef(({ ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M20 4L3 9.31372L10.5 13.5M20 4L14.5 21L10.5 13.5M20 4L10.5 13.5"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default SendIcon;
