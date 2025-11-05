'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function SeraFooter() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const controls = useAnimation();
    const glowControls = useAnimation();
    const [typedText, setTypedText] = useState('');
    const fullText = 'Maeki';
    const [cursorLight, setCursorLight] = useState({ x: 0, y: 0, alpha: 0 });

    // ✨ Efek mengetik ulang
    useEffect(() => {
        let i = 0;
        const type = () => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
                setTimeout(type, 250);
            } else {
                setTimeout(() => {
                    setTypedText('');
                    i = 0;
                    type();
                }, 2500);
            }
        };
        type();
    }, []);

    // 🌟 Efek "bernapas" pada teks
    useEffect(() => {
        controls.start({
            opacity: [0.85, 1, 0.85],
            scale: [1, 1.03, 1],
            transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        });
    }, [controls]);

    // 🔥 Efek cahaya (glow lembut di belakang teks)
    useEffect(() => {
        glowControls.start({
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
            transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        });
    }, [glowControls]);

    // 🌈 Efek cahaya warna-warni pada cursor
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = 500;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (cursorLight.alpha > 0) {
                const hue = (cursorLight.x + cursorLight.y) % 360;
                const glow = ctx.createRadialGradient(
                    cursorLight.x,
                    cursorLight.y,
                    0,
                    cursorLight.x,
                    cursorLight.y,
                    80
                );
                glow.addColorStop(0, `hsla(${hue}, 100%, 75%, ${cursorLight.alpha * 0.8})`);
                glow.addColorStop(0.5, `hsla(${(hue + 80) % 360}, 100%, 65%, ${cursorLight.alpha * 0.4})`);
                glow.addColorStop(1, 'transparent');

                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(cursorLight.x, cursorLight.y, 80, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(draw);
        };

        draw();
        return () => window.removeEventListener('resize', resize);
    }, [cursorLight]);

    // 🧭 Update posisi cursor
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
                setCursorLight({ x, y, alpha: 1 });
            } else {
                setCursorLight((prev) => ({ ...prev, alpha: 0 }));
            }
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
        <footer className="relative w-full h-[500px] overflow-hidden flex flex-col items-center justify-center bg-black">
            <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

            {/* Efek glow di belakang teks */}
            <motion.div
                animate={glowControls}
                className="absolute z-10 w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] rounded-full blur-[100px]
                bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-40"
            />

            {/* Logo teks */}
            <motion.h1
                animate={controls}
                className="relative z-20 text-[10vw] md:text-[6vw] font-extrabold uppercase tracking-[0.25em]
                text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text drop-shadow-[0_0_25px_rgba(255,200,100,0.7)]
                [text-shadow:_0_0_15px_rgb(255_180_50_/_60%)]"
            >
                {typedText}
                <motion.span
                    className="inline-block w-[8px] h-[5vw] md:h-[3vw] bg-yellow-300 ml-1 align-middle"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                animate={{ opacity: [0.5, 1, 0.5], y: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative z-20 mt-3 text-yellow-100 text-lg md:text-2xl font-light tracking-[0.25em] text-center"
            >
                Cahaya Budaya Nusantara ✨
            </motion.p>
        </footer>
    );
}
