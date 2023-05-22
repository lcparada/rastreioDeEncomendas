import {
  Body,
  ButtonBack,
  Container,
  Header,
  HeaderTitle,
  TextDescription,
} from "./styles";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function InformationApp() {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonBack onPress={() => navigation.navigate("Profile")}>
        <Feather name="arrow-left" size={30} color="black" />
      </ButtonBack>
      <Header>
        <HeaderTitle>O que é o RastreioCorreios?</HeaderTitle>
      </Header>

      <Body>
        <TextDescription>
          O aplicativo foi desenvolvido com o objetivo de aprimorar a
          organização das suas encomendas, auxiliando você a acompanhar o status
          de cada produto, identificar os itens adquiridos, e saber quando eles
          serão entregues. Ele oferece uma ampla gama de informações sobre os
          produtos, proporcionando uma experiência mais completa e conveniente.
        </TextDescription>
      </Body>
    </Container>
  );
}
