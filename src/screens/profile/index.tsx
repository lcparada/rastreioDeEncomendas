import { useNavigation } from "@react-navigation/native";
import ButtonOptionProfile from "../../components/buttonOptionProfile";
import {
  Body,
  Container,
  Header,
  HeaderEmailContainer,
  HeaderEmailText,
  HeaderName,
  HeaderPhoto,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { FireStoreService } from "../../services/firestoreService";
import { Alert } from "react-native";

import { useState, useEffect } from "react";

export default function Profile() {
  const navigation = useNavigation();

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      setName(new FireStoreService().getInformationUser()[0]);
      setImage(new FireStoreService().getInformationUser()[1]);
      setEmail(new FireStoreService().getInformationUser()[2]);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  async function exitApp() {
    try {
      await new FireStoreService().logout();
    } catch (e) {
      console.log(e);
      Alert.alert("Erro", "Não foi possível sair do app");
    }
  }

  return (
    <Container>
      <Header>
        <HeaderPhoto source={{ uri: image }} />
        <HeaderName>{name}</HeaderName>
        <HeaderEmailContainer>
          <Feather name="mail" size={20} color="#A5A6A7" />
          <HeaderEmailText>{email}</HeaderEmailText>
        </HeaderEmailContainer>
      </Header>

      <Body>
        <ButtonOptionProfile
          icon="edit-3"
          text="Editar perfil"
          color="#f8ae39"
          onPress={() => navigation.navigate("EditProfile")}
        />
        <ButtonOptionProfile
          icon="help-circle"
          text="Informações do app"
          color="#f8ae39"
          onPress={() => navigation.navigate("InformationApp")}
        />
        <ButtonOptionProfile
          icon="log-out"
          text="Sair"
          color="#F62626"
          onPress={() => exitApp()}
        />
      </Body>
    </Container>
  );
}
