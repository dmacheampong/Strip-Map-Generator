
import { Line } from "./Line";
import { Bullet } from "./Bullet";

interface StripMapProps {
  name: string
  color: string;
  bulletText: string;
  bulletTextColor: string;
  stationsDict: Array<any>;
};

const StripMap = ({ name, color, bulletText, bulletTextColor, stationsDict }: StripMapProps) => {
  /** Dimensions **/
  const width = length * 1.5;
  const height = length / 1.5;


  /** Attributes **/
  const font = 'Helvetica';

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <rect x="0" y="0" width="100%" height="100%" fill='white' />
      <Bullet x={48} y={48} color={color} text={bulletText} textColor={bulletTextColor} font={font} />
      <text x="256" y="48" fontSize={60}>
        {name}
      </text>
      <g transform={`translate(${width / 7.5}, ${height / 2})`}>
        <Line name={name} color={color} stations={stationsDict} bulletTextColor={bulletTextColor} spaceBetween={0} strokeWidth={0} />
      </g>

    </svg>
  );
};

export default StripMap;