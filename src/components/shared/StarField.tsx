"use client";

import { useEffect, useRef, memo } from "react";

function StarFieldComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    type Star = {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      phase: number;
    };

    type ShootingStar = {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
      life: number;
      maxLife: number;
    };

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
      initStars();
    }

    function initStars() {
      if (!canvas) return;
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 8000);
      stars = Array.from({ length: Math.min(count, 200) }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function spawnShootingStar() {
      if (!canvas) return;
      shootingStars.push({
        x: Math.random() * canvas.offsetWidth * 0.8,
        y: Math.random() * canvas.offsetHeight * 0.3,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 3,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        life: 0,
        maxLife: Math.random() * 40 + 30,
      });
    }

    let time = 0;
    let lastShootingStar = 0;

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);
      time += 0.016;

      // Draw stars
      for (const star of stars) {
        const twinkle = prefersReducedMotion
          ? star.opacity
          : star.opacity * (0.5 + 0.5 * Math.sin(time * star.speed * 200 + star.phase));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 240, 232, ${twinkle})`;
        ctx.fill();

        // Gold tint for bigger stars
        if (star.size > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 168, 76, ${twinkle * 0.15})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        // Spawn shooting stars occasionally
        if (time - lastShootingStar > 4 + Math.random() * 6) {
          spawnShootingStar();
          lastShootingStar = time;
        }

        // Draw shooting stars
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const ss = shootingStars[i];
          ss.life++;
          ss.x += Math.cos(ss.angle) * ss.speed;
          ss.y += Math.sin(ss.angle) * ss.speed;
          ss.opacity = 1 - ss.life / ss.maxLife;

          if (ss.life >= ss.maxLife) {
            shootingStars.splice(i, 1);
            continue;
          }

          const tailX = ss.x - Math.cos(ss.angle) * ss.length;
          const tailY = ss.y - Math.sin(ss.angle) * ss.length;

          const gradient = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
          gradient.addColorStop(0, `rgba(201, 168, 76, 0)`);
          gradient.addColorStop(0.6, `rgba(201, 168, 76, ${ss.opacity * 0.3})`);
          gradient.addColorStop(1, `rgba(245, 240, 232, ${ss.opacity * 0.8})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(ss.x, ss.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Head glow
          ctx.beginPath();
          ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 240, 232, ${ss.opacity})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

export const StarField = memo(StarFieldComponent);
