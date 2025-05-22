import { FiSearch } from 'react-icons/fi';
import Icon from './../../assets/icons/Vector.svg';

const Search = () => (
    <section className="container flex justify-center shadow-[0px 0px 5px 0px #0000000D]">
        <div className="flex items-center w-[100%] h-[47px] bg-gray-100 rounded-full pl-5 px-3 py-2 mt-3">
            <FiSearch className="text-gray-500 mr-2" />
            <input
                type="text"
                placeholder="Search any food"
                className="bg-transparent outline-none w-full text-[14px] font-normal"
            />
            <div className="w-[33px] h-[33px] bg-white rounded-[22px] flex items-center justify-center cursor-pointer ">
                <img src={Icon} alt="icon" className="w-[16px] h-[14px]" />
            </div>
        </div>
    </section>
);

export default Search;
