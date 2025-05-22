import { useState } from 'react';
import popularIcon from '../../../../assets/icons/popular.svg';
import dinnerIcon from '../../../../assets/icons/dinner.svg';
import fastIcon from '../../../../assets/icons/popular.svg';
import cakeIcon from '../../../../assets/icons/cake.svg';
import drinkIcon from '../../../../assets/icons/drink.svg';

const categories = [
    { id: 1, name: 'Popular', icon: popularIcon },
    { id: 2, name: 'Dinner', icon: dinnerIcon },
    { id: 3, name: 'Fast Food', icon: fastIcon },
    { id: 4, name: 'Cake', icon: cakeIcon },
    { id: 5, name: 'Drink', icon: drinkIcon },
];

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="flex gap-4 overflow-x-auto px-4 py-4 scrollbar-hide">
            {categories.map((item, index) => (
                <div
                    key={item.id}
                    className="flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => handleSelect(index)}
                >
                    <div
                        className={`flex items-center justify-center w-[65px] h-[80px] rounded-full transition-all ${index === activeIndex
                                ? 'bg-orange text-white'
                                : 'bg-gray-100 text-black'
                            }`}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="w-7 h-7 object-contain"
                        />
                    </div>
                    <span className="text-xs mt-1 text-center">{item.name}</span>
                </div>
            ))}
        </section>
    );
};

export default Categories;
