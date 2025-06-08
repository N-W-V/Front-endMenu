import CatalogCart from "./CatalogCart";
import Foto1 from "../../../../assets/images/slider_foto_1.avif";

export default function CatalogList() {
    return (
        <section className="overflow-x-auto">
            <ul className="flex gap-[8px] mt-[19px] px-[16px] min-w-max">
                <CatalogCart image={Foto1} title="Гамбургер" price={230} />
                <CatalogCart image={Foto1} title="Гамбургер" price={230} />
                <CatalogCart image={Foto1} title="Гамбургер" price={230} />
                <CatalogCart image={Foto1} title="Гамбургер" price={230} />
                <CatalogCart image={Foto1} title="Гамбургер" price={230} />
            </ul>
        </section>

    );
}
