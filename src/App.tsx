import React, { useState } from 'react';
import MergeRoomImages from './components/MergeRoomImages';
import ZoneSelector from './components/ZoneSelector';
import MaterialList from './components/MaterialList';
import { wall1Svg, wall2Svg, ceilSvg, floorSvg, curtainSvg } from './svgs/MaterialsSvg';
import { JSX } from 'react/jsx-runtime';

const zoneNames = ['wall1', 'wall2', 'ceiling', 'floor', 'curtain'];

const defaultMaterials = {
  wall1: wall1Svg,
  wall2: wall2Svg,
  ceiling: ceilSvg,
  floor: floorSvg,
  curtain: curtainSvg,
};

const App: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('wall1');
  // Lưu vật liệu (SVG) cho từng vùng
  const [zoneMaterials, setZoneMaterials] = useState<Record<string, JSX.Element>>(defaultMaterials);

  const handleRegionClick = (index: number) => {
    setSelectedZone(zoneNames[index]);
  };

  // Khi chọn vật liệu cho vùng đang chọn
  const handleMaterialSelect = (materialKey: string) => {
    // materialKey có thể là 'svg-wall1', 'svg-floor'...
    // Ta cần map materialKey về svg element, giả sử bạn có map như sau:
    const materialMap: Record<string, JSX.Element> = {
      'svg-wall1': wall1Svg,
      'svg-wall2': wall2Svg,
      'svg-ceiling': ceilSvg,
      'svg-floor': floorSvg,
      'svg-curtain': curtainSvg,
      // Thêm nếu có vật liệu khác
    };

    const selectedMaterialSvg = materialMap[materialKey];
    if (!selectedMaterialSvg) return;

    // Cập nhật vật liệu cho vùng đang chọn
    setZoneMaterials((prev) => ({
      ...prev,
      [selectedZone]: selectedMaterialSvg,
    }));
  };

  return (
    <div className="flex p-6 gap-8">
      <div className="w-1/2">
       <MergeRoomImages
  layers={zoneMaterials}
  selectedZone={selectedZone}       
  onRegionClick={handleRegionClick}
/>

      </div>

      <div className="w-1/2 space-y-6">
        <ZoneSelector selectedZone={selectedZone} onSelect={setSelectedZone} />
        <MaterialList onSelect={handleMaterialSelect} />
      </div>
    </div>
  );
};

export default App;
