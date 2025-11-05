'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import tarian1 from '../../assets/tarian1.png';
import tarian2 from '../../assets/tarian2.png';
import batikVideo from '../../assets/tarian1.png'; // video batik looping lembut

export default function SeraFooter() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: [0.8, 1, 0.9, 1],
            scale: [1, 1.05, 1, 1.04, 1],
            transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        });

        // ✨ Partikel emas
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const particles: any[] = [];
        const total = 160;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = 520;
        };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < total; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                vy: Math.random() * -0.3 - 0.1,
                opacity: Math.random() * 0.8 + 0.2,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 215, 120, ${p.opacity})`;
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
                p.y += p.vy;
                if (p.y < 0) {
                    p.y = canvas.height;
                    p.x = Math.random() * canvas.width;
                }
            });
            requestAnimationFrame(animate);
        };
        animate();

        return () => window.removeEventListener('resize', resize);
    }, [controls]);

    return (
        <footer className="relative w-full h-[520px] overflow-hidden flex flex-col items-center justify-center bg-black">
            {/* 🎥 Background video batik */}
            <video
                src={batikVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 object-cover opacity-25 mix-blend-overlay"
            />

            {/* ✨ Partikel Emas */}
            <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

            {/* 🔥 Cahaya Panggung */}
            <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[300px] bg-linear-to-t from-amber-500/60 via-yellow-300/20 to-transparent blur-[100px] rounded-full"
            />

            {/* 🌫 Asap lembut */}
            <motion.div
                animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 w-full h-[300px] bg-linear-to-t from-[#ffbf00]/20 via-transparent to-transparent blur-3xl"
            />

            {/* 💃 Penari kiri */}
            <motion.img
                src={tarian1}
                alt="Penari kiri"
                className="absolute left-[8%] bottom-0 w-72 opacity-90 mix-blend-screen z-30"
                animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* 💃 Penari kanan */}
            <motion.img
                src={tarian2}
                alt="Penari kanan"
                className="absolute right-[8%] bottom-0 w-80 opacity-90 mix-blend-screen z-30"
                animate={{ y: [-15, 0, -15], rotate: [0, -1, 1, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* 🌟 Logo “MAEKI” */}
            <motion.h1
                animate={controls}
                className="relative z-40 text-[10vw] md:text-[6vw] font-extrabold uppercase tracking-[0.25em]
        text-transparent bg-linear-to-r from-yellow-200 via-orange-500 to-red-600 bg-clip-text 
        drop-shadow-[0_0_80px_rgba(255,200,80,1)]"
            >
                Maeki
            </motion.h1>

            {/* 🕯 Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="relative z-40 mt-4 text-yellow-100 text-lg md:text-2xl font-light tracking-[0.25em] text-center"
            >
                Cahaya Budaya Nusantara ✨
            </motion.p>

            {/* Overlay atas-bawah */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-black via-transparent to-transparent z-40" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black via-transparent to-transparent z-40" />
        </footer>
    );
}
