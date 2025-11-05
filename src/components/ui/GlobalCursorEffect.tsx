'use client';
import { useEffect, useRef, useState } from 'react';
import kapalImg from "../../assets/kapal.png";

export default function GlobalCursorEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [cursorLight, setCursorLight] = useState({ x: 0, y: 0, alpha: 0 });
    const [kapal, setKapal] = useState<HTMLImageElement | null>(null);

    // Load gambar kapal
    useEffect(() => {
        const img = new Image();
        img.src = kapalImg;
        img.onload = () => setKapal(img);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Efek cahaya
            if (cursorLight.alpha > 0) {
                const hue = (cursorLight.x + cursorLight.y) % 360;
                const glow = ctx.createRadialGradient(
                    cursorLight.x,
                    cursorLight.y,
                    0,
                    cursorLight.x,
                    cursorLight.y,
                    70
                );

                glow.addColorStop(0, `hsla(${hue}, 100%, 75%, ${cursorLight.alpha * 0.8})`);
                glow.addColorStop(0.5, `hsla(${(hue + 80) % 360}, 100%, 65%, ${cursorLight.alpha * 0.4})`);
                glow.addColorStop(1, 'transparent');

                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(cursorLight.x, cursorLight.y, 70, 0, Math.PI * 2);
                ctx.fill();
            }

            // Gambar kapal PNG mengikuti cursor
            if (kapal && cursorLight.alpha > 0) {
                const kapalWidth = 60; // 🔽 ubah sesuai ukuran yg diinginkan
                const kapalHeight = 60;
                ctx.save();
                ctx.translate(cursorLight.x - kapalWidth / 2, cursorLight.y - kapalHeight / 2);
                ctx.drawImage(kapal, 0, 0, kapalWidth, kapalHeight);
                ctx.restore();
            }

            requestAnimationFrame(draw);
        };

        draw();
        return () => window.removeEventListener('resize', resize);
    }, [cursorLight, kapal]);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setCursorLight({ x: e.clientX, y: e.clientY, alpha: 1 });
        };

        const handleLeave = () => setCursorLight((prev) => ({ ...prev, alpha: 0 }));

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseleave', handleLeave);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <>
            {/* Hilangkan kursor asli */}
            <style>{`body { cursor: none; }`}</style>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-[5] pointer-events-none"
            />
        </>
    );
}
