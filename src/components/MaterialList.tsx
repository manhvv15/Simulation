import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { ceilSvg, curtainSvg, floorSvg, wall1Svg, wall2Svg } from '../svgs/MaterialsSvg';

interface Material {
  name: string;
  svg?: JSX.Element;
  color?: string;
}

interface Props {
  onSelect: (value: string) => void;
}

const materials: Material[] = [
  { name: 'Wall1', svg: wall1Svg },
  { name: 'Wall2', svg: wall2Svg },
  { name: 'Ceiling', svg: ceilSvg },
  { name: 'Floor', svg: floorSvg },
  { name: 'Curtain', svg: curtainSvg },
];

const MaterialList: React.FC<Props> = ({ onSelect }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Chọn chất liệu</h3>
      <div className="grid grid-cols-4 gap-4">
        {materials.map((mat, idx) => (
          <div
            key={idx}
            className="border p-2 cursor-pointer hover:shadow"
            onClick={() => onSelect(`svg-${mat.name.toLowerCase()}`)}
            style={{ width: 120, height: 120, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              {mat.svg ? (
                React.cloneElement(mat.svg, { width: '100%', height: '100%', preserveAspectRatio: 'xMidYMid meet' })
              ) : mat.color ? (
                <div style={{ backgroundColor: mat.color, width: '100%', height: '100%' }} />
              ) : null}
            </div>
            <div className="text-center text-sm mt-2">{mat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialList;