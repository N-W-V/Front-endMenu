import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import CatalogList from "./Components/Catalog/CatalogList";
import RecoList from "./Components/RecoList/PopularList";
import Search from "./Components/Search/Search";
import Slider from "./Components/Slider/Slider";

export default function index() {
    return (
        <>
            <Slider />
            <Search />
            <CatalogFilter />
            <CatalogList />
            <RecoList />
        </>
    )
}
