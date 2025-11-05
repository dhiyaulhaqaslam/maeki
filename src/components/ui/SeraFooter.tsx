'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import tarian1 from '../../assets/tarian1.png';
import tarian2 from '../../assets/tarian2.png';

export default function SeraFooter() {
    const lanternCanvas = useRef<HTMLCanvasElement>(null);
    const controls = useAnimation();
    const [typedText, setTypedText] = useState('');
    const fullText = 'Maeki';

    useEffect(() => {
        // 🎹 Efek ketik ulang terus-menerus
        let i = 0;
        const type = () => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
                setTimeout(type, 300);
            } else {
                setTimeout(() => {
                    setTypedText('');
                    i = 0;
                    type();
                }, 2000);
            }
        };
        type();
    }, []);

    useEffect(() => {
        controls.start({
            opacity: [0.8, 1, 0.9, 1],
            scale: [1, 1.02, 1],
            transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        });

        // 🏮 Lentera beterbangan
        const canvas = lanternCanvas.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const lanterns: any[] = [];
        const total = 30;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = 520;
        };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < total; i++) {
            lanterns.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 3 + 1.5,
                vy: Math.random() * -0.3 - 0.1,
                glow: Math.random() * 0.5 + 0.5,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            lanterns.forEach((l) => {
                const gradient = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.r * 3);
                gradient.addColorStop(0, `rgba(255,200,120,${l.glow})`);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(l.x, l.y, l.r * 2, 0, Math.PI * 2);
                ctx.fill();
                l.y += l.vy;
                if (l.y < -10) {
                    l.y = canvas.height + 10;
                    l.x = Math.random() * canvas.width;
                }
            });
            requestAnimationFrame(animate);
        };
        animate();

        return () => window.removeEventListener('resize', resize);
    }, [controls]);

    return (
        <footer className="relative w-full h-[520px] overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#120518] via-[#220b28] to-black">
            {/* 🏮 Lentera terbang */}
            <canvas ref={lanternCanvas} className="absolute inset-0 z-10 pointer-events-none" />

            {/* 💃 Penari kiri */}
            <motion.img
                src={tarian1}
                alt="Penari kiri"
                className="absolute left-[8%] bottom-0 w-60 opacity-90 mix-blend-lighten z-30"
                animate={{ y: [0, -15, 0], rotate: [0, 1, -1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* 💃 Penari kanan */}
            <motion.img
                src={tarian2}
                alt="Penari kanan"
                className="absolute right-[8%] bottom-0 w-68 opacity-90 mix-blend-lighten z-30"
                animate={{ y: [-10, 0, -10], rotate: [0, -1, 1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* 🔤 Logo Typewriter */}
            <motion.h1
                animate={controls}
                className="relative z-40 text-[10vw] md:text-[6vw] font-extrabold uppercase tracking-[0.3em]
        text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text drop-shadow-[0_0_70px_rgba(255,180,60,0.8)]"
            >
                {typedText}
                <motion.span
                    className="inline-block w-[10px] h-[6vw] md:h-[3vw] bg-yellow-300 ml-1 align-middle"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                />
            </motion.h1>

            {/* ✨ Subtitle */}
            <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-40 mt-3 text-yellow-100 text-lg md:text-2xl font-light tracking-[0.25em] text-center"
            >
                Cahaya Budaya Nusantara ✨
            </motion.p>

            {/* 🌾 Ornamen batik bawah */}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute bottom-0 left-0 w-full h-48 opacity-60"
                animate={{ x: [0, -80, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            >
                <path
                    fill="#a15c1b"
                    fillOpacity="0.5"
                    d="M0,160 C320,220 640,100 960,180 C1280,260 1440,120 1440,120 L1440,320 L0,320 Z"
                />
            </motion.svg>

            {/* Fade gradient */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black via-transparent to-transparent z-40" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-transparent to-transparent z-40" />
        </footer>
    );
}
