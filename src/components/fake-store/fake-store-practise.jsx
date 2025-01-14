import React, {
  useEffect,
  useReducer,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";
import NavBar from "./navbar";
import axios from "axios";

export const initialState = {
  cartCount: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        cartCount: state.cartCount + 1,
      };
  }
};

function FakeStorePractise() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "https://picsum.photos/200/100",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ]);

  const loadCategories = useCallback(async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    const data = await response.data;
    setCategories(data);
  }, []);

  const loadProducts = useCallback(async (url) => {
    const response = await axios.get(url);
    const data = await response.data;
    setProducts(data);
  }, []);

  const loadProductsByCategory = async (e) => {
    if (e.target.value === "All") {
      loadProducts(`https://fakestoreapi.com/products`);
    } else {
      loadProducts(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  };

  const handleAddToCartClick = (product) => {
    alert(`${product.title} has been added to cart`);
    dispatch({ type: "add" });
  };

  const handleNavBarClick = (e) => {
    if (e.target.innerText === "Home") {
      loadProducts(`https://fakestoreapi.com/products`);
    } else {
      loadProducts(
        `https://fakestoreapi.com/products/category/${e.target.innerText}`
      );
    }
  };

  useEffect(() => {
    loadCategories();
    loadProducts(`https://fakestoreapi.com/products`);
  }, [loadCategories, loadProducts]);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Fakestore
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" onClick={handleNavBarClick}>
              Home
            </a>
            <a className="nav-item nav-link" onClick={handleNavBarClick}>
              Electronics
            </a>
            <a className="nav-item nav-link" onClick={handleNavBarClick}>
              Jewellery
            </a>
            <button type="button" className="btn btn-primary">
              Cart Items
              <span className="badge badge-light">{state.cartCount}</span>
            </button>
          </div>
        </div>
      </nav>
      <div className="row m-5">
        <div className="col-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={loadProductsByCategory}
          >
            <option>All</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="col">
          <div className="d-flex p-2  flex-wrap ">
            {products.map((product) => (
              <div
                className="p-3 m-2 border border-primary"
                style={{ width: 350 }}
                key={product.id}
              >
                <img
                  src={product.image}
                  width={200}
                  height={100}
                  alt="loading...."
                />
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.rating.rate}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => handleAddToCartClick(product)}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FakeStorePractise;
