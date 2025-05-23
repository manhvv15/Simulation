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

                const baseStyle = {
                    position: 'absolute' as const,
                    cursor: 'pointer',
                    overflow: 'hidden' as const,
                    boxSizing: 'border-box' as const,
                    border: isSelected ? '3px solid red' : 'none',
                    borderRadius: 1,
                };

                if (zone === 'wall1') {
                    return (
                        <svg
                            key={zone}
                            onClick={() => onRegionClick(idx)}
                            style={{ ...baseStyle, top: 80, left: 460, width: 260, height: 340 }}
                            viewBox="0 0 260 340"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polygon
                                points="30,0 200,0 230,100 180,250 60,250 0,150"
                                fill={isSelected ? 'rgba(32, 150, 81, 0.15)' : 'transparent'}
                                stroke={isSelected ? 'rgba(31, 8, 137, 0.15)' : 'transparent'}
                                strokeWidth={isSelected ? 2 : 0}
                                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                            />


                            <foreignObject x="0" y="0" width="260" height="340">
                                <div style={{ width: '100%', height: '100%' }}>
                                    {layers[zone]}
                                </div>
                            </foreignObject>
                        </svg>
                    );
                }

                if (zone === 'wall2') {
                    return (
                        <svg
                            key={zone}
                            onClick={() => onRegionClick(idx)}
                            style={{ ...baseStyle, top: 80, left: 140, width: 250, height: 340 }}
                            viewBox="0 0 250 340"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polygon
                                points="20,0 230,40 210,120 50,330 0,190"
                                fill={isSelected ? 'rgba(44, 128, 63, 0.2)' : 'transparent'}
                                stroke={isSelected ? '#228B22' : 'transparent'}
                                strokeWidth={isSelected ? 2 : 0}
                                style={{ cursor: 'pointer' }}
                            />

                            <foreignObject x="0" y="0" width="250" height="340">
                                <div style={{ width: '100%', height: '100%' }}>
                                    {layers[zone]}
                                </div>
                            </foreignObject>
                        </svg>
                    );
                }

                // Vùng hình chữ nhật 
                let rectStyle = {};
                switch (zone) {
                    case 'ceiling':
                        rectStyle = { top: 0, left: 0, width: 800, height: 80 };
                        break;
                    case 'floor':
                        rectStyle = { top: 500, left: 0, width: 800, height: 100 };
                        break;
                    case 'curtain':
                        rectStyle = { top: 80, left: 50, width: 90, height: 340 };
                        break;
                }

                return (
                    <div
                        key={zone}
                        onClick={() => onRegionClick(idx)}
                        style={{ ...baseStyle, ...rectStyle }}
                    >
                        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            {layers[zone]}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};



export default MergeRoomImages;
