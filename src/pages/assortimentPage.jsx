import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Filters } from "../components/catalog/Filters";
import { Assortiment } from "../components/catalog/assortiment";

export const AssortimentPage = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({ generatorType: "Дизельный", selectedPower: [] });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <main>
      {category.toLowerCase() === "генераторы" && <Filters onFilterChange={handleFilterChange} />}
      <Assortiment filters={filters} />
    </main>
  );
};
