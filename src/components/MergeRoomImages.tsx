import React from 'react';
import { JSX } from 'react/jsx-runtime';

interface Props {
  layers: Record<string, JSX.Element>;
  selectedZone: string;               
  onRegionClick: (index: number) => void;
}

const zoneNames = ['wall1', 'wall2', 'ceiling', 'floor', 'curtain'];

const MergeRoomImages: React.FC<Props> = ({ layers, selectedZone, onRegionClick }) => {
  return (
    <div className="relative w-[800px] h-[600px]">
      {zoneNames.map((zone, idx) => {
        const isSelected = zone === selectedZone;

        return (
          <div
            key={zone}
            onClick={() => onRegionClick(idx)}
            style={{
              position: 'absolute',
              cursor: 'pointer',
              overflow: 'hidden',
              boxSizing: 'border-box',
              border: isSelected ? '3px solid red' : 'none',  // viền đỏ khi chọn
              borderRadius: 4,
              ...(zone === 'wall1' && { top: 80, left: 460, width: 260, height: 340 }),
              ...(zone === 'wall2' && { top: 80, left: 140, width: 250, height: 340 }),
              ...(zone === 'ceiling' && { top: 0, left: 0, width: 800, height: 80 }),
              ...(zone === 'floor' && { top: 500, left: 0, width: 800, height: 100 }),
              ...(zone === 'curtain' && { top: 80, left: 50, width: 90, height: 340 }),
            }}
          >
            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              {React.cloneElement(layers[zone], {
                width: '100%',
                height: '100%',
                preserveAspectRatio: 'xMidYMid meet',
                style: { display: 'block', width: '100%', height: '100%' }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MergeRoomImages;
