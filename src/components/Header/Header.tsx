import { IoIosNotifications } from "react-icons/io";

const Header = () => (
    <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-[25px] font-poppins fw-[700] font-bold">Logo</h1>
        <IoIosNotifications className="text-xl" />
    </div>
);

export default Header;