import { ada_black, ada_white } from "../assets/icons";
import { ny_bullets } from "../utils";

type StationProps = {
    name: string;
    transfers: Array<string>;
    isAccessible: boolean;
    lineColor: string
    x: number;
    y: number;
};

export function Station({ name, transfers, isAccessible, lineColor, x, y }: StationProps) {

    const hasTransfers = (transfers.length > 0);
    const nameOffset = -16;
    const transfersOffset = 36;

    return (
        <>
            <circle cx={x} cy={y} r={10} fill={hasTransfers ? '#FFFFFF' : lineColor} stroke={hasTransfers ? '#000000' : lineColor} strokeWidth={3} />
            {isAccessible && <image href={(hasTransfers) ? ada_black : ada_white} x={x} y={y} transform={`translate(${-7} ${-9})`} width={16} height={16} />}

            <text x={x} y={nameOffset} transform={`rotate(-45, ${x}, ${nameOffset})`}>{name}</text>
            {transfers.map((transfer, i) => (
                <image key={name + '_' + transfer} href={ny_bullets.get(transfer)} x={x} y={transfersOffset * (i + 1)} transform={`translate(${-12} ${-12})`} width={25} height={25} />
            ))}
        </>
    );
}