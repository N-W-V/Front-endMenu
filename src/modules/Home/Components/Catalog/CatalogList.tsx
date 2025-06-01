import CatalogCart from "./CatalogCart";

export default function CatalogList() {
    return (
        <section className="overflow-x-auto">
            <ul className="flex gap-[8px] mt-[19px] px-[16px] min-w-max">
                <CatalogCart />
                <CatalogCart />
                <CatalogCart />
                <CatalogCart />
                <CatalogCart />
            </ul>
        </section>

    );
}
