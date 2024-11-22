import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// npm install react-native-app-intro-slider
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "1",
    title: "Andressa Jandre",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus saepe totam eos cum ea.",
    //image: require("./assets/icon.png"),
  },
  {
    key: "2",
    title: "Brenda Barbatti",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus saepe totam eos cum ea.",
    //image: require("./assets/icon.png"),
  },
  {
    key: "3",
    title: "Caio Pacheco",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus saepe totam eos cum ea.",
    //image: require("./assets/icon.png"),
  },
  {
    key: "4",
    title: "Murilo Bongard",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus saepe totam eos cum ea.",
    //image: require("./assets/icon.png"),
  },
  {
    key: "5",
    title: "Luiz Fernando Francedino",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus saepe totam eos cum ea.",
    //image: require("./assets/icon.png"),
  },
  {
    key: "6",
    title: "Isabella Pinheiro",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus saepe totam eos cum ea.",
    //image: require("./assets/icon.png"),
  },
];

export function TimeScreen() {
  const [showHome, setShowHome] = useState(false);

  function renderSlides({ item }: any) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4B0082",
        }}
      >
        <Text
          style={{
            paddingBottom: 40,
            fontSize: 23,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Nosso Time
        </Text>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "40%",
            width: "80%",
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: 20,
            paddingHorizontal: 20,
            fontSize: 15,
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  }

  if (showHome) {
    return <Text>Entrou na home</Text>;
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: "white",
        }}
        renderNextButton={() => undefined}
        renderDoneButton={() => undefined}
      />
    );
  }
}
