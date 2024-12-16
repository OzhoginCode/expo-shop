import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSQLiteContext } from 'expo-sqlite';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const db = useSQLiteContext();

  const updateCartProducts = async () => {
    const products = await db.getAllAsync('SELECT * FROM cart');
    setCartProducts(products);
  };

  const addProductToCart = async ({ id, title, description, price, image }) => {
    const existingProduct = cartProducts.find((product) => product.id === id);
  
    const updateProductQuantity = async () => {
      await db.runAsync(
        `UPDATE cart SET quantity = ? WHERE id = ?`,
        existingProduct.quantity + 1, id,
      );
    };
  
    const insertNewProduct = async () => {
      await db.runAsync(
        `INSERT INTO cart (id, title, description, price, image, quantity)
        VALUES (?, ?, ?, ?, ?, ?)`,
        id, title, description, price, image, 1,
      );
    };
  
    existingProduct ? await updateProductQuantity() : await insertNewProduct();

    updateCartProducts();
  };
  

  useEffect(() => {
    updateCartProducts();
  }, []);

  return (
    <CartContext.Provider value={{ cartProducts, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};
