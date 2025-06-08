import { GoHomeFill } from "react-icons/go";
import { BiSolidCategory } from "react-icons/bi";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <nav className="fixed bottom-0 left-0 w-full px-4 pb-[16px]">
            <div className="bg-white rounded-[24px] shadow-[3px_4px_16px_0px_#090E1D1A]">
                <ul className="grid grid-cols-4 items-center h-[75px]">
                    <NavbarItem path="/" text="Главная" Icon={<GoHomeFill />} />
                    <NavbarItem path="/category" text="Категории" Icon={<BiSolidCategory />} />
                    <NavbarItem path="/order" text="Заказы" Icon={<BsFillBasket2Fill />} />
                    <NavbarItem path="/about-us" text="О нас" Icon={<BsInfoCircleFill />} />
                </ul>
            </div>
        </nav>
    );
}
