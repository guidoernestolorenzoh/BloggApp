// Sidebar fijo, menos ancho, y debajo del Navbar (Navbar z-index mayor)

import { useState } from "react";
import {SIDEBARITEMS} from '../utils'
import cn from 'clsx';
import { Link } from "react-router-dom";

const SIDEBAR_WIDTH = 68; // px
const SIDEBAR_EXPANDED_WIDTH = 220; // px, ajusta según necesidad

const ACTIVE_COLOR = "bg-blue-500 text-white dark:bg-blue-400"; 

const Sidebar = () => {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(0);

    return (
        <aside
            className={`
                fixed top-0 left-0 h-full bg-white shrink-0 text-black shadow-md flex flex-col pt-24 z-30 transition-all duration-200 dark:bg-[#27272a]  
                
            `}
            style={{
                width: hovered ? `${SIDEBAR_EXPANDED_WIDTH}px` : `${SIDEBAR_WIDTH}px`
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Espacio arriba para el Navbar, que debe ser de z-40 o superior */}
            <nav className={cn(`flex flex-col gap-1`, hovered ? 'px-4' : 'px-2')}>
                {SIDEBARITEMS.map((item, index) => {
                    const isActive = active === index;
                    return (
                        <Link to={item.path} key={item.id}>
                            <button
                                key={item.label}
                                className={`
                                    ${hovered ? 'items-center pl-7.5 cursor-pointer' : 'items-center justify-center'} rounded-xl py-3 px-2 my-1 text-sm
                                    transition-colors  w-full
                                    ${isActive ? ACTIVE_COLOR : "text-foreground hover:bg-gray-300/40 dark:hover:bg-gray-700/80"} flex  font-semibold
                                `}
                                type="button"
                                title={item.label}
                                aria-current={isActive ? "page" : undefined}
                                onClick={()=> setActive(index)}
                            >
                                {item.icon && typeof item.icon === 'function' && (
                                    <item.icon className={`w-6 h-6 ${isActive ? "text-white" : "text-muted"}`} />
                                )}
                                <span
                                    className={`
                                        ml-3 whitespace-nowrap transition-opacity duration-200
                                        ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}
                                    `}
                                    style={{ 
                                        width: hovered ? "auto" : 0, 
                                        display: hovered ? "inline" : "none"
                                    }}
                                >
                                    {item.label}
                                </span>
                            </button>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;