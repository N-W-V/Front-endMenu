import { NavLink } from "react-router-dom";
import type { JSX } from "react";
import CardActionArea from "@mui/material/CardActionArea";

interface NavbarItemProps {
    Icon: JSX.Element;
    path: string;
    text: string;
}

export default function NavbarItem({ Icon, path, text }: NavbarItemProps) {
    const rippleEffect = {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px",
    }

    return (
        <li className="h-full first:rounded-l-[24px] last:rounded-r-[24px] overflow-hidden">
            <NavLink to={path} className={({ isActive }) => `${isActive ? "text-black" : "text-gray"} h-full font-nunito font-bold text-[10px] duration-300`}>
                <CardActionArea sx={rippleEffect}>
                    <span className="text-[25px]">{Icon}</span>
                    <span>{text}</span>
                </CardActionArea>
            </NavLink>
        </li>
    );
}