import { SQLiteProvider } from 'expo-sqlite';
import { Stack } from 'expo-router/stack';

import { CartProvider } from '../context/CartContext.jsx';
import initDb from '../db/index.js';

const Layout = () => (
  <SQLiteProvider databaseName="expoShopDB" onInit={initDb}>
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  </SQLiteProvider>
);

export default Layout;
