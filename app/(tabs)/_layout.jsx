import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabLayout = () => (
  <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Список товаров',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }} />
    <Tabs.Screen
      name="cart"
      options={{
        title: 'Корзина',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
      }} />
  </Tabs>
)

export default TabLayout;
