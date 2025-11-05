import { Home, Map, Newspaper, Calendar } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
    const base =
        "flex flex-col items-center transition-all font-medium select-none";

    return (
        <div
            className="
        fixed bottom-[clamp(6px,1.4vw,20px)] left-1/2 -translate-x-1/2 z-50
        flex
        gap-[clamp(10px,2.5vw,28px)]
        bg-transparent
      "
        >
            {/* HOME */}
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `${base} ${isActive ? "text-yellow-300" : "text-white/70 hover:text-white"}`
                }
            >
                {({ isActive }) => (
                    <>
                        <div
                            className={`
                rounded-full transition-all flex items-center justify-center
                p-[clamp(6px,1.4vw,14px)]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/25 hover:bg-white/15 hover:scale-105"
                                }
              `}
                            style={{ minWidth: "32px", minHeight: "32px" }}
                        >
                            <Home
                                className="w-[clamp(14px,2.4vw,30px)] h-[clamp(14px,2.4vw,30px)]"
                            />
                        </div>
                        <span className="mt-[2px] text-[clamp(8px,1.6vw,12px)] text-[#9C1D2A]">
                            Home
                        </span>
                    </>
                )}
            </NavLink>

            {/* GIS */}
            <NavLink
                to="/gis"
                className={({ isActive }) =>
                    `${base} ${isActive ? "text-yellow-300" : "text-white/70 hover:text-white"}`
                }
            >
                {({ isActive }) => (
                    <>
                        <div
                            className={`
                rounded-full transition-all flex items-center justify-center
                p-[clamp(6px,1.4vw,14px)]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/25 hover:bg-white/15 hover:scale-105"
                                }
              `}
                            style={{ minWidth: "32px", minHeight: "32px" }}
                        >
                            <Map
                                className="w-[clamp(14px,2.4vw,30px)] h-[clamp(14px,2.4vw,30px)]"
                            />
                        </div>
                        <span className="mt-[2px] text-[clamp(8px,1.6vw,12px)] text-[#9C1D2A]">
                            GIS
                        </span>
                    </>
                )}
            </NavLink>

            {/* NEWS */}
            <NavLink
                to="/news"
                className={({ isActive }) =>
                    `${base} ${isActive ? "text-yellow-300" : "text-white/70 hover:text-white"}`
                }
            >
                {({ isActive }) => (
                    <>
                        <div
                            className={`
                rounded-full transition-all flex items-center justify-center
                p-[clamp(6px,1.4vw,14px)]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/25 hover:bg-white/15 hover:scale-105"
                                }
              `}
                            style={{ minWidth: "32px", minHeight: "32px" }}
                        >
                            <Newspaper
                                className="w-[clamp(14px,2.4vw,30px)] h-[clamp(14px,2.4vw,30px)]"
                            />
                        </div>
                        <span className="mt-[2px] text-[clamp(8px,1.6vw,12px)] text-[#9C1D2A]">
                            News
                        </span>
                    </>
                )}
            </NavLink>

            {/* EVENT */}
            <NavLink
                to="/event"
                className={({ isActive }) =>
                    `${base} ${isActive ? "text-yellow-300" : "text-white/70 hover:text-white"}`
                }
            >
                {({ isActive }) => (
                    <>
                        <div
                            className={`
                rounded-full transition-all flex items-center justify-center
                p-[clamp(6px,1.4vw,14px)]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/25 hover:bg-white/15 hover:scale-105"
                                }
              `}
                            style={{ minWidth: "32px", minHeight: "32px" }}
                        >
                            <Calendar
                                className="w-[clamp(14px,2.4vw,30px)] h-[clamp(14px,2.4vw,30px)]"
                            />
                        </div>
                        <span className="mt-[2px] text-[clamp(8px,1.6vw,12px)] text-[#9C1D2A]">
                            Event
                        </span>
                    </>
                )}
            </NavLink>
        </div>
    );
}
