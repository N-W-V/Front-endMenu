import CatalogFilterItem from "./CatalogFilterItem";

export default function CatalogFilter() {

    return (
        <section className="overflow-scroll">
            <ul className="flex gap-[8px] items-center mt-[26px] px-[16px] min-w-max">
                <CatalogFilterItem text="Горячее" />
                <CatalogFilterItem text="Бар" />
                <CatalogFilterItem text="Завтраки" />
                <CatalogFilterItem text="Холодное" />
            </ul>
        </section>
    )
}