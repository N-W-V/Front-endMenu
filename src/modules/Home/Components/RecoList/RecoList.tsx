import RecoCart from "./RecoCart";

export default function RecoList() {
    return (
        <section className="mt-[20px]">
            <div className="container">
                <h2 className='font-nunito font-normal text-[18px] '>Рекомендуемое</h2>
            </div>

            <div className="overflow-scroll">
                <ul className="mb-[40px] flex gap-[8px] mt-[16px] px-[16px] min-w-max">
                    <RecoCart />
                    <RecoCart />
                    <RecoCart />
                    <RecoCart />
                </ul>
            </div>
        </section>
    )
}
