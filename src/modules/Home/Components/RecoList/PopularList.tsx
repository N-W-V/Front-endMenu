import PopularCart from "./PopularCart";

export default function PopularList() {
    return (
        <section className="mt-[20px] pb-[200px]">
            <div className="container">
                <h2 className='font-nunito font-normal text-[18px]'>Популярные</h2>
            </div>

            <div className="overflow-scroll">
                <ul className="mb-[40px] flex gap-[8px] mt-[16px] px-[16px] min-w-max">
                    <PopularCart />
                    <PopularCart />
                    <PopularCart />
                    <PopularCart />
                </ul>
            </div>
        </section>
    )
}
