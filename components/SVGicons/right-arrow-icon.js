const RightArrowIcon = (props) => {
  return (
    <svg
      width={10}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="m1.388 2.389 7.686 5.19-7.686 5.142"
          stroke="#707070"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h10v15H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RightArrowIcon;
