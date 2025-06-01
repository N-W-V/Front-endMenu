import SearchIcon from "../../../../assets/icons/search.svg";

export default function SearchBtn() {
    return (
        <button className="bg-white rounded-[50px] h-[42] flex items-center gap-[8px] px-[12px] py-[9px]">
            <img src={SearchIcon} alt="" />
            <p className="font-nunito font-medium text-[16px] text-netural">Поиск...</p>
        </button>
    )
}
