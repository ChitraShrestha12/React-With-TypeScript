import { useEffect, useState } from "react";
import type { ProductDetails } from "../types";
import SearchFilter from "./SearchFilter";
import CardList from "./CardList";

function FilterContainer() {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [quary, setQuary] = useState<string>("");
  const [filteredData, setFilteredData] = useState<ProductDetails[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredData(data.products)
      });
  }, []);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuary(value);
  }

  function filterData() {
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(quary.toLowerCase())
    );
    setFilteredData(filtered)
  }
  return (
    <>
      <section className="filter-container">
        <SearchFilter
          type={"text"}
          handleInputChange={handleInputChange}
          btnName={"Filter by category"}
          onClick={filterData}
        />
      </section>
      <CardList products={filteredData} />
    </>
  );
}

export default FilterContainer;
