import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let FiltersContext = createContext({});

export default function FiltersContextProvider(props) {
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState(-1);
    const [maxPrice, setMaxPrice] = useState(-1);
    const [allCategories, setAllCategories] = useState([]);
    const [rating, setRating] = useState(-1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [mostPopular, setMostPopular] = useState(false);



    return <FiltersContext.Provider value={{
        search, setSearch,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        allCategories, setAllCategories,
        rating, setRating,
        selectedCategory, setSelectedCategory,
        mostPopular, setMostPopular
    }}>
        {props.children}
    </FiltersContext.Provider>
}