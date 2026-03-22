import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { ICONS, IconName } from '../../../assets/icons';
interface Props {
  name: IconName;
  size?: number;
  color?: string;
}
const Icon: React.FC<Props> = ({ name, size = 24, color = '#FFFFFF' }) => {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <Svg width={size} height={size} viewBox={icon.viewBox} fill="none">
      {icon.paths.map((path, index) => {
        switch (path.type) {
          case 'circle':
            return (
              <Circle
                key={index}
                cx={path.cx}
                cy={path.cy}
                r={path.r}
                stroke={path.stroke ? color : 'none'}
                strokeWidth={path.strokeWidth}
                fill={path.stroke ? 'none' : color}
              />
            );
          case 'rect':
            return (
              <Rect
                key={index}
                x={path.x}
                y={path.y}
                width={path.width}
                height={path.height}
                rx={path.rx}
                fill={`${color}22`}
                stroke="none"
              />
            );
          case 'path':
          default:
            return (
              <Path
                key={index}
                d={path.d}
                stroke={path.stroke ? color : 'none'}
                strokeWidth={path.strokeWidth ?? 2}
                strokeLinecap={path.strokeLinecap ?? 'round'}
                strokeLinejoin={path.strokeLinejoin ?? 'round'}
                fill={path.stroke ? 'none' : color}
              />
            );
        }
      })}
    </Svg>
  );
};
export default Icon;
