import axios from "axios";
import React, { useCallback, useEffect, useReducer, useState } from "react";

const initialState = {
  cartCount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        cartCount: state.cartCount + 1,
      };
  }
}

function FakeStore() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

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

  const loadProductsByCategory = (e) => {
    if (e.target.value === "All") {
      loadProducts(`https://fakestoreapi.com/products`);
    } else {
      loadProducts(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  };
  const handleAddToCartClick = (product) => {
    console.log(product);
    alert(`${product.title} added to cart`);
    dispatch({
      type: "add",
    });
  };

  const handleCartClick = () => {};

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Electronics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jewellery
              </a>
            </li>
            <li className="nav-item float-right">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                cart items
                <span className="badge badge-light">{state.cartCount}</span>
              </button>
            </li>
          </ul>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="row m-5">
          <div className="col-2">
            <h3>Select Category</h3>
            <select className="form-select" onChange={loadProductsByCategory}>
              <option>All</option>
              {categories.map((category) => {
                return <option>{category}</option>;
              })}
            </select>
          </div>
          <div className="col d-flex justify-content-start flex-wrap align-items-stretch border">
            {products.map((product) => (
              <div key={product.id} className="col-1 m-3">
                <img
                  src={product.image}
                  alt=""
                  style={{ width: 200, height: 100 }}
                />
                <p>{product.title}</p>
                <h4>Price</h4>
                <p>{product.price}</p>
                <h4>Rating</h4>
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
      </section>
    </div>
  );
}

export default FakeStore;
