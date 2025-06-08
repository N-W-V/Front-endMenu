import AddButton from "../../../../ui/AddButton/AddButton";

interface CatalogCartProps {
    image: string;
    title: string;
    price: number;
}

export default function CatalogCart({ image, title, price }: CatalogCartProps) {
    return (
        <li className="bg-white max-w-[125px] min-w-[125px] p-[8px] rounded-[18px]">
            <img className="aspect-square object-cover rounded-[16px] pb-[8px]" src={image} alt={title} />

            <div className="py-[4px] grid grid-cols-[1fr_38px] items-center gap-[6px]">
                <div className="flex flex-col gap-[4px]">
                    <h3 className="font-nunito font-normal text-[12px] text-black truncate max-w-[65px]">{title}</h3>
                    <p className="font-nunito font-normal text-[14px] text-black">{price}с</p>
                </div>
                <AddButton />
            </div>
        </li>
    )
}
