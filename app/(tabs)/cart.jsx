import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { useCart } from '../../context/CartContext.jsx'
import ProductListItem from '../../components/ProductListItem.jsx';

export default () => {
  const { cartProducts } = useCart();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList 
            data={cartProducts}
            renderItem={({ item: product }) => (
              <ProductListItem
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
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
