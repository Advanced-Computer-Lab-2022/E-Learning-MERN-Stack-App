import React, { createContext, useState } from "react";

export let FiltersContext = createContext({});

export default function FiltersContextProvider(props) {
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState(-1);
    const [maxPrice, setMaxPrice] = useState(-1);
    const [allCategories, setAllCategories] = useState([]);
    const [rating, setRating] = useState(-1);
    const [selectedCategory, setSelectedCategory] = useState('');

    return <FiltersContext.Provider value={{
        search, setSearch,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        allCategories, setAllCategories,
        rating, setRating,
        selectedCategory, setSelectedCategory
    }}>
        {props.children}
    </FiltersContext.Provider>
}