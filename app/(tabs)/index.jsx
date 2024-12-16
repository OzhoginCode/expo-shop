import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { useCart } from '../../context/CartContext.jsx';
import ProductListItem from '../../components/ProductListItem.jsx';

const fetchProducts = async (setProducts) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error();
    }
    const products = await response.json();
    setProducts(products);
  } catch (error) {
    console.error(error);
  }
};

export default () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [products, setProducts] = useState([]);

  const { addProductToCart } = useCart();

  const onRefresh = () => {
    setIsRefreshing(true);
    fetchProducts(setProducts)
      .then(() => setIsRefreshing(false));
  };

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList 
            data={products}
            renderItem={({ item: product }) => (
              <ProductListItem
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                addProductToCart={() => addProductToCart(product)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100vh'
  },
});
