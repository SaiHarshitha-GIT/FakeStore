import React from "react";
import useFetch from "../hooks/use-fetch";

function Categories() {
  const data = useFetch("https://fakestoreapi.com/products/categories");
  return (
    <div>
      <h1>Product categoroes</h1>
      <ol>
        {data.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
}

export default Categories;
