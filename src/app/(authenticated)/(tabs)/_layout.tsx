import TabBar from '@/components/TabBar';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props: any) => <TabBar {...props} />}>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="categories" />
      <Tabs.Screen name="my-cart" />
      <Tabs.Screen name="my-order" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabsLayout;
