import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductListitem = ({ title, description, price, image, addProductToCart, quantity }) => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Image 
        source={{ uri: image }}
        style={styles.logo} 
        resizeMode="contain" 
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
        {quantity && (<Text style={styles.quantity} numberOfLines={1}>Количество: {quantity}</Text>)}
        <Text style={styles.price}>{price} $</Text>
      </View>
    </View>
    {addProductToCart && 
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={addProductToCart}>
      <Text style={styles.buttonText}>Добавить в корзину</Text>
    </TouchableOpacity>
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 12,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    marginTop: 4,
    fontSize: 16,
    color: '#666',
  },
  quantity: {
    marginTop: 4,
    fontSize: 16,
    color: '#666',
  },
  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    marginHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProductListitem;
