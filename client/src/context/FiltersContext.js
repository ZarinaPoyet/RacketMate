import React, { createContext, useContext, useState } from 'react';

const FiltersContext = createContext();

export const useFilters = () => useContext(FiltersContext);

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        selectedGender: null,
        selectedSkillLevel: null,
        selectedClub: null
    });

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    )
};

