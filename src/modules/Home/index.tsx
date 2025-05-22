import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Categories from "./Components/Categories/Categories";
import Hero from "./Components/Hero/Hero";

export default function index() {
    return (
        <>
            <Header />
            <Hero />
            <Search />
            <Categories />

        </>
    )
}
