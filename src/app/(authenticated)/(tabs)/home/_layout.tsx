import Header from '@/components/Header';
import { Stack } from 'expo-router';
const _layout = () => {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    />
  );
};
export default _layout;
