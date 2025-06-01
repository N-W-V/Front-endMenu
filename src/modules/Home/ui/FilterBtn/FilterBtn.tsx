import FilterIcon from "../../../../assets/icons/filter.svg";

export default function FilterBtn() {
    return (
        <button  className="w-[42px] h-[42px] rounded-full bg-primary flex items-center justify-center">
            <img src={FilterIcon} alt="" />
        </button>
    )
}
