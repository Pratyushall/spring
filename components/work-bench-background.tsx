"use client";

import { useEffect, useRef } from "react";

export function WorkBenchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js";
    script.async = true;

    const threeScript = document.createElement("script");
    threeScript.src =
      "https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js";
    threeScript.async = true;

    let vantaEffect: any = null;

    threeScript.onload = () => {
      script.onload = () => {
        if ((window as any).VANTA && canvas) {
          vantaEffect = (window as any).VANTA.WAVES({
            el: canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x010101,
            shininess: 30.0,
            waveHeight: 20.0,
            waveSpeed: 0.6,
            zoom: 0.65,
            colors: [0xbf40ca, 0x7a139a, 0xaa78b1, 0xe5e5e5],
            speed: 5,
            horizontalPressure: 0,
            verticalPressure: 4,
            waveFrequencyX: 2,
            waveFrequencyY: 4,
            waveAmplitude: 4,
            shadows: 4,
            highlights: 6,
            colorBrightness: 1,
            colorSaturation: 0,
            wireframe: false,
            colorBlending: 4,
            backgroundColor: 0xeaf4e5,
            backgroundAlpha: 1,
            grainScale: 2,
            grainSparsity: 0,
            grainIntensity: 0.15,
            grainSpeed: 0.8,
            resolution: 0.05,
            yOffset: 1067,
          });
        }
      };
    };

    document.head.appendChild(threeScript);
    document.head.appendChild(script);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
  );
}
