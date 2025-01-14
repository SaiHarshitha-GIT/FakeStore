import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Card() {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const count = useRef(1);
  const reference = useRef(null);
  const loadProduct = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data); // Log the response to the console
      })
      .catch((error) => console.error("Error loading product:", error));
  };

  const loadProductAuto = () => {
    reference = axios.get(`https://fakestoreapi.com/products/${count.current}`);
    setInterval(() => {
        reference.current
    }, 5000);
  }

  useEffect(() => {
    loadProduct(1); // Call it with a valid ID
  }, []); // Empty dependency array means it only runs on mount

  const handleNextClick = () => {
    count.current = count.current + 1;
    loadProduct(count.current);
  };

  const handlePreviousClick = () => {
    count.current = count.current - 1;
    loadProduct(count.current);
  };
  return (
    <div className="container-fluid">
      <div className="card w-50 m-4">
        <div className="card-header"></div>
        {product.title}
        <div className="card-body">
          <div className="row">
            <div className="col-1">
              <button
                className="bi bi-chevron-left btn btn-dark"
                onClick={handlePreviousClick}
              ></button>
            </div>
            <div className="col-9">
              <img src={product.image} width={200} height={200} alt="image" />
            </div>

            <div className="col-1">
              <button
                className="bi bi-chevron-right btn btn-dark"
                onClick={handleNextClick}
              ></button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary bi-play m-10"></button>
          <button className="btn btn-primary bi-pause"></button>
        </div>
      </div>
    </div>
  );
}

export default Card;
