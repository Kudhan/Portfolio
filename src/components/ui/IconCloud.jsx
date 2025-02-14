import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

export function IconCloud({ images }) {
  const canvasRef = useRef(null);
  const [iconPositions, setIconPositions] = useState([]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef();
  const rotationRef = useRef(rotation);
  const iconCanvasesRef = useRef([]);
  const imagesLoadedRef = useRef([]);

  // Create icon canvases once when images change
  useEffect(() => {
    if (!images) return;

    imagesLoadedRef.current = new Array(images.length).fill(false);

    const newIconCanvases = images.map((image, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 40;
      offscreen.height = 40;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = image;
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
          offCtx.beginPath();
          offCtx.arc(20, 20, 20, 0, Math.PI * 2);
          offCtx.closePath();
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, 40, 40);
          imagesLoadedRef.current[index] = true;
        };
      }
      return offscreen;
    });

    iconCanvasesRef.current = newIconCanvases;
  }, [images]);

  // Generate initial icon positions on a sphere
  useEffect(() => {
    const numIcons = images.length;
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    const newIcons = [];
    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      newIcons.push({ x: x * 100, y: y * 100, z: z * 100, id: i });
    }

    setIconPositions(newIcons);
  }, [images]);

  // Handle mouse events for dragging
  const handleMouseDown = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !canvasRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setLastMousePos({ x, y });
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      };

      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Animation loop for rendering icons and handling 3D rotation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update rotation continuously for animation effect with increased speed
      rotationRef.current = {
        x: rotationRef.current.x + 0.01, // Increased rotation speed
        y: rotationRef.current.y + 0.01, // Increased rotation speed
      };

      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        ctx.save();
        ctx.translate(canvas.width / 2 + rotatedX, canvas.height / 2 + rotatedY);
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        if (iconCanvasesRef.current[index] && imagesLoadedRef.current[index]) {
          ctx.drawImage(iconCanvasesRef.current[index], -20, -20, 40, 40);
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [iconPositions, isDragging]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="rounded-lg"
      aria-label="Interactive 3D Icon Cloud"
      role="img"
    />
  );
}
