import Foto1 from "../../../../assets/images/slider_foto_2.avif";
import AddButton from "../../../../ui/AddButton/AddButton";

export default function PopularCart() {
    return (
        <li className="bg-white flex gap-[12px] p-[8px] rounded-[16px] max-w-[260px] min-w-[260px] h-[116px]">
            <img className="w-[100px] h-[100px] rounded-[16px] object-cover" src={Foto1} alt="" />

            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="font-nunito font-medium text-[14px] text-black">Хот-Дог</h3>
                    <p className="font-nunito font-normal text-[11px] text-netural leading-3.5 line-clamp-2 pt-[3px]">Сочный хот-дог с ароматной сосиской, свежей булочкой, кетчупом, горчицей и хрустящими огурчиками. Идеальный перекус в любое время дня.</p>

                </div>
                <div className="flex justify-between items-center">
                    <p className="font-nunito font-normal text-[16px] text-black">150с</p>

                    <AddButton />
                </div>
            </div>
        </li>
    )
}
