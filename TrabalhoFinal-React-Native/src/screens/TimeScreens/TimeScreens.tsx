import { useState } from "react";
import { Text, View, Image } from "react-native";
// npm install react-native-app-intro-slider
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "1",
    title: "Andressa Jandre",
    text: "Especialista em design de interfaces intuitivas, Andressa transforma ideias em experiências visuais incríveis. Com um olhar criativo, ela garante que cada detalhe do e-commerce inspire confiança e facilidade para os leitores.",
    image: require("../../../assets/Andressa.jpeg"),
  },
  {
    key: "2",
    title: "Brenda Barbatti",
    text: "Com uma paixão por organização e eficiência, Brenda é a mente por trás das funcionalidades de gerenciamento de estoque e controle de pedidos. Ela assegura que cada livro esteja sempre no lugar certo, na hora certa.",
    image: require("../../../assets/Brenda.jpeg"),
  },
  {
    key: "3",
    title: "Caio Pacheco",
    text: "Entusiasta em desenvolvimento backend, Caio é quem dá vida à infraestrutura do sistema. Ele garante que o e-commerce funcione com velocidade, segurança e suporte a grandes volumes de acessos simultâneos.",
    image: require("../../../assets/Caio.jpeg"),
  },
  {
    key: "4",
    title: "Murilo Bongard",
    text: "Especialista em dados, Murilo traz inteligência para o app. Ele analisa tendências e implementa relatórios que ajudam o administrador a tomar decisões baseadas em insights poderosos sobre vendas e clientes.",
    image: require("../../../assets/Murilo.jpeg"),
  },
  {
    key: "5",
    title: "Luiz Fernando Francedino",
    text: "O guardião da experiência completa, Luiz lidera a integração entre frontend e backend, garantindo que cada página flua perfeitamente. Com sua paixão por código, ele transforma o e-commerce em uma ferramenta poderosa e prática.",
    image: require("../../../assets/LindoPerfeitoMaravilhoso.jpeg"),
  },
  {
    key: "6",
    title: "Isabella Pinheiro",
    text: "Com um amor por livros e tecnologia, Isabella é a responsável pela curadoria do catálogo. Ela garante que cada obra no e-commerce seja apresentada de forma cativante e com informações precisas para os leitores.",
    image: require("../../../assets/Isabella.jpeg"),
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
