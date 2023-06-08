import { forwardRef } from "react";

const TextIcon = forwardRef(({ ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <g>
        <path
          d="M10 19H12M12 19H14M12 19V5M12 5H6V6M12 5H18V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
});

export default TextIcon;
