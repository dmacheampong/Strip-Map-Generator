
import { Line } from "./Line";
import { Bullet } from "./Bullet";

export type StripMapProps = {
  name: string
  color: string;
  bulletText: string;
  bulletTextColor: string;
  stationsDict: Array<any>;
};

export function StripMap({ name, color, bulletText, bulletTextColor, stationsDict }: StripMapProps) {
  /** Dimensions **/
  const length = (stationsDict.length - 1) * 60;
  const width = length * 1.5;
  const height = 1000;


  /** Attributes **/
  const font = 'Helvetica';

  return (
    <>
      <svg width={1000} height={900} viewBox={`0 1000 ${width} ${height}`}>
        <rect x="0" y="0" width="100%" height="100%" fill='white' />
        <Bullet x={48} y={48} color={color} text={bulletText} textColor={bulletTextColor} font={font} />
        <text x="256" y="48" fontSize={60}>
          {name}
        </text>
        <g transform={`translate(${width / 7.5}, ${height / 2})`}>
          <Line length={length} color={color} stations={stationsDict} bulletTextColor={bulletTextColor} spaceBetween={60} strokeWidth={5} />
        </g>

      </svg>
    </>
  );
};

