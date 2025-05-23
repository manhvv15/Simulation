import React from 'react';

const RoomImage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Select a room</h2>
      <img src="/room.png" alt="Original Room" className="max-w-full rounded shadow" />
    </div>
  );
};

export default RoomImage;