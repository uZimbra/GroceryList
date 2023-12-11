import {createContext, useContext, useMemo, useState} from 'react';
import {Product} from '../domain/Product';

type ProductContextData = {
  productList: Product[];
  addProduct: (product: Product) => void;
  handleDeleteProduct: (id: string) => void;
};

const ProductContext = createContext({} as ProductContextData);

export function ProductsProvider({
  children,
}: Readonly<{children: React.ReactNode}>) {
  const [productList, setProductList] = useState<Product[]>([]);

  function addProduct(product: Product) {
    setProductList(value => [...value, product]);
  }

  function handleDeleteProduct(productId: string) {
    setProductList(current => current.filter(item => item.id != productId));
  }

  const contextProps = useMemo(
    () => ({productList, addProduct, handleDeleteProduct}),
    [productList, addProduct, handleDeleteProduct],
  );

  return (
    <ProductContext.Provider value={contextProps}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductContext);

  if (!ctx) {
    throw new Error('useProducts must be used within an ProductsProvider');
  }

  return ctx;
}
