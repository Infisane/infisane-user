import React from "react";

type Props = {
  percent?: number;
  size?: number;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  text?: string;
};

const CustomPieChart: React.FC<Props> = ({
  percent = 60,
  size = 100,
  strokeWidth = 13,
  color1 = "#FFB822",
  color2 = "#FFB90433",
  text = "#fff"
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color2}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color1}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={size / 5}
        fontWeight="bold"
        fill={text}
      >
        {percent}%
      </text>
    </svg>
  );
};

export default CustomPieChart;
