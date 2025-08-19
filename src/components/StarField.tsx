import { useEffect, useRef } from 'react';

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Array<{ x: number; y: number; size: number; opacity: number; speed: number }> = [];
    
    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(star.x, star.y, star.size, star.size);
        ctx.restore();
        
        // Animate opacity
        star.opacity += star.speed * (Math.random() > 0.5 ? 1 : -1);
        if (star.opacity <= 0) star.opacity = 0.1;
        if (star.opacity >= 1) star.opacity = 0.9;
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    />
  );
};