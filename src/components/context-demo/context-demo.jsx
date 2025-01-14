import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const searchContext = createContext(null);

export function SearchResults() {
  const data = useContext(searchContext);
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: "",
        count: 0,
      },
    },
  ]);

  const loadProductsByCategory = async (category) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadProductsByCategory("jewelery");
  }, []);

  return (
    <div className="text-black">
      <h4>Search results</h4>
      <p>{`${data} data`}</p>
      <div>
        {products.map((product) => (
          <p>{product.description}</p>
        ))}
      </div>
    </div>
  );
}

function ContextDemo() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchTextChange = (e) => {
    //console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    setCategory(searchText);
  };
  return (
    <div className="bg-dark p-2 m-2 text-white">
      <header className="d-flex justify-content-between">
        <div>Shopper.</div>
        <div>
          <input
            type="text"
            name="Search"
            id=""
            placeholder="Search shopper"
            onChange={handleSearchTextChange}
            value={searchText}
          />
          <button
            type="submit"
            className="bi bi-search btn btn-warning"
            onClick={handleSearch}
          ></button>
        </div>
        <div>
          <span className="bi bi-cart4"></span>
          <span className="bi bt-person-fill"></span>
        </div>
      </header>
      <searchContext.Provider value={category}>
        <section className="bg-light p-3" style={{ height: "400px" }}>
          <SearchResults />
        </section>
      </searchContext.Provider>
    </div>
  );
}

export default ContextDemo;
