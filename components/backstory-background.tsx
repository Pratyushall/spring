"use client";

import { useEffect, useRef } from "react";

const BACKSTORY_CONFIG = {
  colors: [
    {
      color: "#BF40CA",
      enabled: true,
    },
    {
      color: "#7A139A",
      enabled: true,
    },
    {
      color: "#AA78B1",
      enabled: true,
    },
    {
      color: "#E5E5E5",
      enabled: true,
    },
    {
      color: "#C4DDC5",
      enabled: false,
    },
  ],
  speed: 5.5,
  horizontalPressure: 0,
  verticalPressure: 4,
  waveFrequencyX: 2,
  waveFrequencyY: 0,
  waveAmplitude: 4,
  shadows: 4,
  highlights: 6,
  colorBrightness: 1,
  colorSaturation: 5,
  wireframe: false,
  colorBlending: 10,
  backgroundColor: "#EAF4E5",
  backgroundAlpha: 1,
  grainScale: 2,
  grainSparsity: 0,
  grainIntensity: 0.15,
  grainSpeed: 0.8,
  resolution: 1.1,
  yOffset: 1067,
};

export function BackstoryBackground() {
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
      "https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.min.js";
    threeScript.async = true;

    let vantaEffect: any;

    threeScript.onload = () => {
      script.onload = () => {
        // @ts-ignore
        if (window.VANTA && canvas) {
          // @ts-ignore
          vantaEffect = window.VANTA.WAVES({
            el: canvas,
            ...BACKSTORY_CONFIG,
          });
        }
      };
      document.head.appendChild(script);
    };

    document.head.appendChild(threeScript);

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      script.remove();
      threeScript.remove();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
