import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import VisualTheme, { Theme } from './src/common/VisualTheme';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaView style={VisualTheme.droidSafeArea}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
