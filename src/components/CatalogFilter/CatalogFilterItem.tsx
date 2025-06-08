import { CardActionArea } from "@mui/material";

interface CatalogFilterItemProps {
  text: string;
}

export default function CatalogFilterItem({ text }: CatalogFilterItemProps) {
  return (
    <li className="bg-white text-center overflow-hidden min-w-[75px] rounded-[20px] font-nunito font-normal text-[12px] text-black hover:bg-primary duration-500">
      <CardActionArea
        sx={{
          paddingX: "16px",
          paddingY: "6px",
        }}>
        {text}
      </CardActionArea>
    </li>
  )
}
