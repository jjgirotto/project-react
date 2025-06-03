// App.js
import { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Products from "./Products";

async function api(url, method, body = undefined) {
  return await fetch(`http://localhost:4000/${url}`, {
    body: body !== undefined ? JSON.stringify(body) : body,
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

async function apiGetProducts() {
  const data = await api("products", "GET");
  return data.products.map(product => ({
    ...product,
    price: parseFloat(product.price)
  }));
}

async function apiSubmitCart(products) {
  await api("purchases", "POST", { products });
}

function App() {
  const [productsLoading, setProductsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  async function getProducts() {
    setProductsLoading(true);
    setProducts(await apiGetProducts());
    setProductsLoading(false);
  }

  async function submitCart() {
    setCartLoading(true);
    await apiSubmitCart(cart);
    setCart([]); 
    setCartLoading(false);

    getProducts(); 
  }

  function setProduct(product, change) {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        const updatedProduct = { ...updatedCart[existingProductIndex] };
        updatedProduct.units += change;

        if (updatedProduct.units <= 0) {
          setProducts((prevProducts) => [...prevProducts, { ...updatedProduct, units: 0 }]); 
          return updatedCart.filter((item) => item.id !== product.id);
        } else {
          updatedCart[existingProductIndex] = updatedProduct;
          return updatedCart;
        }
      }
      return prevCart; 
    });
  }

  function addProduct(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, units: item.units + 1 } : item
        );
      } else {
        setProducts((prevProducts) => prevProducts.filter((item) => item.id !== product.id));
        return [...prevCart, { ...product, units: 1 }];
      }
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const SMain = styled.main`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    background-color: #f8f8f8;
    font-family: 'Arial', sans-serif;
  `;

  return (
    <SMain>
      <Cart
        products={cart}
        onChange={setProduct}
        onClick={submitCart}
        isLoading={cartLoading}
      />
      <Products
        products={products}
        onClick={addProduct}
        isLoading={productsLoading}
      />
    </SMain>
  );
}

export default App;