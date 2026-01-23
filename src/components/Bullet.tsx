type BulletProps = {
    x: number;
    y: number;
    color: string;
    text: string;
    textColor: string;
    font: string;
};

export function Bullet({ x, y, color, text, textColor, font = 'Helvetica' }: BulletProps) {
    return (
        <g className="bullet">
            <circle cx={x} cy={y} r='36' fill={color} />
            <text x={x} y={y} textAnchor="middle" alignmentBaseline="central" fontSize={72 / text.length} fontFamily={font} fontWeight='bold' fill={textColor} >{text}</text>
        </g>
    );
};