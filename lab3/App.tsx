import React, { useState } from 'react';
import ProductList from './Products/Products';
import Product_Add from './Products/Product_Add';
import ProductDetail from './Products/Product_Detail';
import ProductSearch from './Products/Product_Search';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
  { 
    key: 'ProductList', 
    title: 'Products', 
    focusedIcon: 'bomb', 
    unfocusedIcon: 'bomb' 
  },
  { 
    key: 'Product_Add', 
    title: 'Add', 
    focusedIcon: 'bomb', 
    unfocusedIcon: 'bomb' 
  },
  { 
    key: 'ProductSearch', 
    title: 'Search', 
    focusedIcon: 'help', 
    unfocusedIcon: 'help' 
  },
  { 
    key: 'Product_Detail', 
    title: 'Detail', 
    focusedIcon: 'new-box', 
    unfocusedIcon: 'new-box' 
  },
]);

  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    Product_Add: Product_Add,
    ProductSearch: ProductSearch,
    Product_Detail: ProductDetail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}