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
  const [zoneMaterials, setZoneMaterials] = useState<Record<string, JSX.Element>>(defaultMaterials);

  const handleRegionClick = (index: number) => {
    setSelectedZone(zoneNames[index]);
  };

  const handleMaterialSelect = (materialKey: string) => {
    const materialMap: Record<string, JSX.Element> = {
      'svg-wall1': wall1Svg,
      'svg-wall2': wall2Svg,
      'svg-ceiling': ceilSvg,
      'svg-floor': floorSvg,
      'svg-curtain': curtainSvg,
    };

    const selectedMaterialSvg = materialMap[materialKey];
    if (!selectedMaterialSvg) return;

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
