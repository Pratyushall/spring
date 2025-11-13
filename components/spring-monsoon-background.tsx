"use client";

import { useEffect, useRef } from "react";

const SPRING_MONSOON_CONFIG = {
  colors: [
    {
      color: "#CC54BA",
      enabled: true,
    },
  ],
  speed: 4.5,
  horizontalPressure: 4,
  verticalPressure: 4,
  waveFrequencyX: 3,
  waveFrequencyY: 2,
  waveAmplitude: 1,
  shadows: 2,
  highlights: 2,
  colorBrightness: 1,
  colorSaturation: -1,
  wireframe: false,
  colorBlending: 1,
  backgroundColor: "#010101",
  backgroundAlpha: 1,
  grainScale: 2,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 1,
  resolution: 0.75,
  yOffset: 0,
};

export function SpringMonsoonBackground() {
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
            ...SPRING_MONSOON_CONFIG,
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
