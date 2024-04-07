import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-[40px] text-red-400 bg-green-400">Hello Ritesh</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: 'yellow',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});


