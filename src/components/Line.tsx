import { Station } from "./Station";

export type LineProps = {
    name: string;
    color: string;
    bulletTextColor: string;
    stations: any;
    spaceBetween: number;
    strokeWidth: number;
};

export function Line({ name, color, stations, spaceBetween = 60, strokeWidth = 5, bulletTextColor = '#FFFFFF' }: LineProps) {
    const length = (stations.length - 1) * spaceBetween;

    return (
        <>
            <line x1={0} y1={0} x2={length} y2={0} stroke={color} strokeWidth={strokeWidth} />

            {stations.map((station: any, i: number) => (
                <Station key={i} name={station.name} lineColor={color} x={spaceBetween * i} y={0} transfers={[]} isAccessible={false} branch={""} />
            ))}
        </>
    );
}

