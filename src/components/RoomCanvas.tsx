// File: src/components/RoomCanvas.tsx
import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

interface Props {
    selectedTexture: string | null;
    selectedZone: string | null;
}

interface Zone extends fabric.Rect {
    zoneId?: string;
}

const RoomCanvas: React.FC<Props> = ({ selectedTexture, selectedZone }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricRef = useRef<fabric.Canvas | null>(null);
    const zonesRef = useRef<Record<string, Zone>>({});

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current!, {
            width: 800,
            height: 600,
            selection: false,
        });

        // Load background image using type-safe wrapper
        (fabric.Image.fromURL as any)('/room.jpg', (img: fabric.Image) => {
            (canvas as any).setBackgroundImage(img, canvas.renderAll.bind(canvas));
        });

        // Define zones
        const makeZone = (id: string, options: any): Zone => {
            const rect = new fabric.Rect({
                ...options,
                fill: 'transparent',
                selectable: false,
                stroke: 'transparent',
            }) as Zone;
            rect.zoneId = id;
            canvas.add(rect);
            return rect;
        };

        const zones = {
            wall1: makeZone('wall1', { left: 80, top: 120, width: 300, height: 150 }),
            wall2: makeZone('wall2', { left: 430, top: 120, width: 250, height: 150 }),
            ceiling: makeZone('ceiling', { left: 0, top: 0, width: 800, height: 100 }),
            floor: makeZone('floor', { left: 0, top: 450, width: 800, height: 150 }),
            curtain: makeZone('curtain', { left: 620, top: 180, width: 150, height: 250 }),
        };

        zonesRef.current = zones;
        fabricRef.current = canvas;

        canvas.on('mouse:down', (opt) => {
            const obj = opt.target as Zone;
            if (obj?.zoneId) {
                Object.values(zones).forEach((z) => z.set('stroke', 'transparent'));
                obj.set('stroke', 'red');
                canvas.renderAll();
            }
        });

        return () => {
            canvas.dispose();
        };
    }, []);

    useEffect(() => {
        if (selectedTexture && selectedZone && fabricRef.current) {
            const zone = zonesRef.current[selectedZone];
            if (!zone) return;

            if (selectedTexture.startsWith('#')) {
                zone.set('fill', selectedTexture);
                fabricRef.current.renderAll();
            } else {
                (fabric.Image.fromURL as any)(selectedTexture, (img: fabric.Image) => {
                    if (!img) {
                        console.warn('Ảnh không load được:', selectedTexture);
                        return;
                    }
                    const pattern = new fabric.Pattern({
                        source: img.getElement(),
                        repeat: 'repeat',
                    });
                    zone.set('fill', pattern);
                    fabricRef.current!.renderAll();
                });

            }
        }
    }, [selectedTexture, selectedZone]);

    return <canvas ref={canvasRef} />;
};

export default RoomCanvas;
