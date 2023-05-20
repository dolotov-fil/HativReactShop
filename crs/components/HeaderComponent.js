import React from "react";
import { Image, Linking, View, TouchableWithoutFeedback } from "react-native";

function HeaderComponent() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: -14,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL("https://google.com")}
      >
        <Image
          source={{
            uri: "https://static.wixstatic.com/media/180deb_49437ab75fbd4b86abb8a6bfe31c7a3d~mv2.png",
          }}
          style={{
            width: 47,
            height: 92,
          }}
        />
      </TouchableWithoutFeedback>
      <View>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
          }}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>
    </View>
  );
}

export default HeaderComponent;
