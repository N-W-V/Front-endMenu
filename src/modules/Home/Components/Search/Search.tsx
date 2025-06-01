import SearchBtn from "../../ui/SearchBtn/SearchBtn";
import FilterBtn from "../../ui/FilterBtn/FilterBtn";

export default function Search() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-[1fr_42px] gap-[18px] mt-[26px]">
          <SearchBtn />

          <FilterBtn />
        </div>
      </div>
    </section>
  )
}
