import { Text, View, TouchableOpacity } from 'react-native';
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-50">
      <Text className="text-3xl font-bold text-blue-600">Hola 👋</Text>
      <Text className="text-gray-500 mt-2">NativeWind funcionando</Text>
      <TouchableOpacity 
        className="bg-blue-600 px-6 py-3 rounded-full mt-6"
        onPress={() => alert('funciona!')}
      >
        <Text className="text-white font-semibold">Botón de prueba</Text>
      </TouchableOpacity>
    </View>
  );
}