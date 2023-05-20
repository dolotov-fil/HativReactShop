import React, { useState } from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { tovar } from "../Tovar";

function ClickCatigories() {
  const [active, setAstive] = useState(null);
  return (
    <View style={{ paddingTop: 40 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Hey,</Text>
      <Text style={{ fontSize: 22 }}>what's up</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 40,
          backgroundColor: "A9D0DB",
        }}
      >
        {tovar.map((cat, idx ) => (
          <View
          key={cat.id}
            style={{
              width: "30%",
              height: 80,
              marginBottom: 10,
              borderRadius: 30,
              backgroundColor: active === idx ? "#F1F1F1" : "white",
              justifyContent: "center",
            }}
          >
            <TouchableHighlight
              onPress={() => setAstive(idx)}
              underlayColor="#F1F1F1"
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: cat.image }}
                  style={{ width: 30, height: 30 }}
                />
                <Text style={{ fontSize: 13, marginTop: 8, marginBottom: 14 }}>
                  {cat.name}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
}

export default ClickCatigories;
