import React from 'react';

interface Props {
  onSelect: (urlOrColor: string) => void;
}

const materials = [
  { name: 'Gỗ sáng', url: '/textures/wood.jpg' },
  { name: 'Rèm xám', url: '/textures/curtain.jpg' },
  { name: 'Xám nhạt', url: '#ccc' },
  { name: 'Vàng kem', url: '#f5e1a4' },
];


const MaterialPicker: React.FC<Props> = ({ onSelect }) => {
  return (
    <div>
      {materials.map((mat) => ( 
        <button
          key={mat.name}
          onClick={() => onSelect(mat.url)}
          style={{ display: 'block', marginBottom: '10px' }}
        >
          {mat.name}
        </button>
      ))}
    </div>
  );
};

export default MaterialPicker;
