import { View } from "react-native";
import Header from "./crs/pages/Header";
import Catigories from "./crs/pages/Catigories";
import Popular from "./crs/pages/Popylar";

export default function App() {
  return (
    <View
      style={{
        padding: 24,
        paddingTop: 55,
        paddingBottom: 75,
        backgroundColor: "#F1F1F1",
        
      }}
    >
      <Header />
      <Catigories />
      <Popular />
    </View>
  );
}
