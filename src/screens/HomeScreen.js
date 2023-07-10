import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings")
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Button title='Ir a Settings' onPress={()=>goToPage()}/>
    </View>
  );
}

export default HomeScreen;