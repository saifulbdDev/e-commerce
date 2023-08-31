import React from 'react';

const Arrow = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>)=> {
  return (
    <svg
      width="21"
      {...props}
      height="10"
      viewBox="0 0 21 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1006 4.99935L15.0666 0.832683L15.0666 4.16602L0.079731 4.16601L0.079731 5.83268L15.0666 5.83268L15.0666 9.16602L20.1006 4.99935Z"
        fill="white"
      />
    </svg>
  );
};

export default Arrow;
