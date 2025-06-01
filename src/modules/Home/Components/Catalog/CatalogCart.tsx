import Foto1 from "../../../../assets/images/slider_foto_1.avif";
import AddButton from "../../../../ui/AddButton/AddButton";

export default function CatalogCart() {
    return (
        <li className="bg-white max-w-[125px] min-w-[125px] p-[8px] rounded-[18px]">
            <img className="aspect-square object-cover rounded-[16px] pb-[8px]" src={Foto1} alt="" />

            <div className="py-[4px] grid grid-cols-[1fr_38px] gap-[6px]">
                <div className="flex flex-col gap-[4px]">
                    <h3 className="font-nunito font-normal text-[12px] text-black truncate max-w-[65px]">Гамбургер</h3>
                    <p className="font-nunito font-normal text-[14px] text-black">220с</p>
                </div>
                <AddButton />
            </div>
        </li>
    )
}
