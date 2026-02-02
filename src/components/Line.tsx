import { Station } from "./Station";

export type LineProps = {
    length?: number;
    color: string;
    bulletTextColor: string;
    stations: any;
    spaceBetween: number;
    strokeWidth: number;
};

export function Line({ length, color, stations, spaceBetween, strokeWidth = 5, bulletTextColor = '#FFFFFF' }: LineProps) {

    return (
        <>
            <line x1={0} y1={0} x2={length} y2={0} stroke={color} strokeWidth={strokeWidth} />

            {stations.map((station: any, i: number) => (
                <Station key={station.id} name={station.name} lineColor={color} x={spaceBetween * i} y={0} transfers={station.transfers} isAccessible={station.isAccessible} />
            ))}
        </>
    );
}

