import { CardActionArea } from "@mui/material";
import { GoPlus } from "react-icons/go";

export default function AddButton() {
    const btnStyle = {
        backgroundColor: "gray",
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    
    return (
        <CardActionArea
            sx={btnStyle}>
            <GoPlus className="text-white text-[28px]" />
        </CardActionArea>
    )
}
