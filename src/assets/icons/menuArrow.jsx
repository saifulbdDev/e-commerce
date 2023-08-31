const MenuArrow = ({ width = 30, height = 30, className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill="#233564" />
      <path
        d="M11 15C11 15.1705 11.0652 15.3411 11.1953 15.4713L17.862 22.1379C18.1225 22.3984 18.5443 22.3984 18.8046 22.1379C19.065 21.8774 19.0651 21.4556 18.8046 21.1953L12.6093 15L18.8046 8.80467C19.0651 8.54418 19.0651 8.12234 18.8046 7.86201C18.5441 7.60168 18.1223 7.60151 17.862 7.86201L11.1953 14.5286C11.0652 14.6588 11 14.8295 11 15Z"
        fill="white"
      />
    </svg>
  )
}

export default MenuArrow
