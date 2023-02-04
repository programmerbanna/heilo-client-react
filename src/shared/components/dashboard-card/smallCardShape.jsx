export function SmallCardShape(props) {
  return (
    <svg
      width="128"
      height="119"
      viewBox="0 0 128 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.75" filter="url(#filter0_d_98_1625)">
        <path
          d="M11.7304 40.7796C11.8503 24.0926 31.1483 14.8824 44.1969 25.2845L73.5096 48.6521L90.6208 62.2928C105.381 74.0592 97.1231 97.8431 78.2474 97.9315L31.5559 98.1501C20.4175 98.2023 11.3827 89.1448 11.4628 78.0066L11.7304 40.7796Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_98_1625"
          x="0.461914"
          y="0.886719"
          width="126.73"
          height="117.264"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="9" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_98_1625"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_98_1625"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
