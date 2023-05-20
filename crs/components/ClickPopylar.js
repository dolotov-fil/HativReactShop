import React from "react";
import { useState } from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { Popular } from "../Popular";

function ClickTovar() {
  const [active, setAstive] = useState(null);
  return (
    <View style={{ paddingTop: 40 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Popular</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 40,
          backgroundColor: "A9D0DB",
        }}
      >
        {Popular.map((progest, idx, ) => (
          <View
          key={idx}
            style={{
              width: "30%",
              height: 80,
              marginBottom: 10,
              borderRadius: 30,
              backgroundColor: active === idx ? "white" : "#F1F1F1",
              justifyContent: "center",
            }}
          >
            <TouchableHighlight
              onPress={() => setAstive(idx)}
              underlayColor="#F1F1F1"
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: progest.image }}
                  style={{ width: 30, height: 30 }}
                />
                <Text style={{    }}>
                  {progest.name}
                </Text>
                <Text style={{  }}>
                  {progest.price}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
}

export default ClickTovar;
