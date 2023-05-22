import { useNavigation } from "@react-navigation/native";

import { Button, ButtonText, Container, Logo, SubTitle, Title } from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo source={require("../../assets/packageLogo.png")} />
      <Title>Saiba onde está seu pacote{"\n"}de qualquer lugar</Title>
      <SubTitle>Cheque o processo das suas entregas </SubTitle>
      <Button onPress={() => navigation.navigate("Register")}>
        <ButtonText>Acompanhar agora</ButtonText>
      </Button>
    </Container>
  );
}
