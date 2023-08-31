import React from 'react';

const ArrowRight = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10H20M20 10L11 1M20 10L11 19"
      
        strokeWidth="2"
      />
    </svg>
  );
};

export default ArrowRight;
