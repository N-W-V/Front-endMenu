interface CatalogFilterItemProps {
  text: string;
}

export default function CatalogFilterItem({ text }: CatalogFilterItemProps) {
  return (
    <li>
      <button className="bg-white px-[16px] py-[6px] min-w-[75px] rounded-[20px] font-nunito font-normal text-[12px] text-black hover:bg-primary duration-500">{text}</button>
    </li>
  )
}
