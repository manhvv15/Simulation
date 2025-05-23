import React from 'react';

interface Props {
  onSelect: (zone: string) => void;
  selectedZone: string;
}

const zones = ['wall1', 'wall2', 'ceiling', 'floor', 'curtain'];

const ZoneSelector: React.FC<Props> = ({ onSelect, selectedZone }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Chọn vùng</h3>
      <div className="flex flex-wrap gap-2">
        {zones.map((zone) => (
          <button
            key={zone}
            onClick={() => onSelect(zone)}
            className={`px-3 py-1 border rounded ${selectedZone === zone ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            {zone}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ZoneSelector;