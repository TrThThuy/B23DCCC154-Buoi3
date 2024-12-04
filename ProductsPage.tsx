// src/pages/ProductsPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Product } from '../redux/types';
import { addProduct, removeProduct, editProduct } from '../redux/productsSlice';
import ProductList from '../components/ProductList';
import AddProductForm from '../components/AddProductForm';
import SearchBar from '../components/SearchBar';

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    // Fetch initial data or any necessary setup
    console.log('ProductsPage loaded');
  }, []);

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const handleEditProduct = (product: Product) => {
    dispatch(editProduct(product));
  };

  return (
    <div>
      <h1>Quản lý Hàng Hóa</h1>
      <SearchBar />
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList
        products={products}
        onRemoveProduct={handleRemoveProduct}
        onEditProduct={handleEditProduct}
      />
    </div>
  );
};

export default ProductsPage;
