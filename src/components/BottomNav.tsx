import { Home, Map, Newspaper, Calendar } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
    const base =
        "flex flex-col items-center text-xs transition-all font-medium select-none";

    return (
        <div
            className="
      fixed bottom-6 left-1/2 -translate-x-1/2 z-50
      flex gap-8 sm:gap-12
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
              p-4 sm:p-5
              ${isActive
                                    ? "bg-yellow-300/30 scale-110 shadow-[0_0_25px_rgba(255,255,0,0.6)]"
                                    : "bg-white/10 hover:bg-white/20 hover:scale-105"
                                }
            `}
                        >
                            <Home className="w-7 h-7 sm:w-10 sm:h-10" />
                        </div>
                        <span className="mt-1 sm:text-sm">Home</span>
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
              p-4 sm:p-5
              ${isActive
                                    ? "bg-yellow-300/30 scale-110 shadow-[0_0_25px_rgba(255,255,0,0.6)]"
                                    : "bg-white/10 hover:bg-white/20 hover:scale-105"
                                }
            `}
                        >
                            <Map className="w-7 h-7 sm:w-10 sm:h-10" />
                        </div>
                        <span className="mt-1 sm:text-sm">GIS</span>
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
              p-4 sm:p-5
              ${isActive
                                    ? "bg-yellow-300/30 scale-110 shadow-[0_0_25px_rgba(255,255,0,0.6)]"
                                    : "bg-white/10 hover:bg-white/20 hover:scale-105"
                                }
            `}
                        >
                            <Newspaper className="w-7 h-7 sm:w-10 sm:h-10" />
                        </div>
                        <span className="mt-1 sm:text-sm">News</span>
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
              p-4 sm:p-5
              ${isActive
                                    ? "bg-yellow-300/30 scale-110 shadow-[0_0_25px_rgba(255,255,0,0.6)]"
                                    : "bg-white/10 hover:bg-white/20 hover:scale-105"
                                }
            `}
                        >
                            <Calendar className="w-7 h-7 sm:w-10 sm:h-10" />
                        </div>
                        <span className="mt-1 sm:text-sm">Event</span>
                    </>
                )}
            </NavLink>
        </div>
    );
}
