import { forwardRef } from "react";

const PhotoIcon = forwardRef(({ ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9a2 2 0 0 1 2-2h1.5a2 2 0 0 0 1.6-.8l1.05-1.4a2 2 0 0 1 1.6-.8h2.5a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
      />
      <circle
        cx={12}
        cy={13}
        r={4}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
});

export default PhotoIcon;