import React, { useState } from 'react';
import RoomCanvas from './components/RoomCanvas';
import MaterialPicker from './components/MaterialPicker';

const App: React.FC = () => {
  const [selectedTexture, setSelectedTexture] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div>
        <h3>Vùng chọn</h3>
        {['wall1', 'wall2', 'ceiling', 'floor', 'curtain'].map((zone) => (
          <button key={zone} onClick={() => setSelectedZone(zone)} style={{ marginBottom: 10 }}>
            {zone}
          </button>
        ))}
        <h3>Chọn vật liệu</h3>
        <MaterialPicker onSelect={(texture) => setSelectedTexture(texture)} />
      </div>
      <RoomCanvas selectedTexture={selectedTexture} selectedZone={selectedZone} />
    </div>
  );
};

export default App;
