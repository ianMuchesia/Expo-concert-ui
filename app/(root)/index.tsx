import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       
      <Text className="text-primary text-3xl">Edit app/index.ts o edit this screen.
      
      </Text>
     
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
