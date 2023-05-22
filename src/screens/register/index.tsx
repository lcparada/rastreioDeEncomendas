import { Keyboard, Pressable, KeyboardAvoidingView, Alert } from "react-native";

import InputApp from "../../components/input";

import {
  Body,
  Button,
  ButtonText,
  Footer,
  Container,
  Header,
  HeaderLogo,
  HeaderTitle,
  IconShowPassword,
  AlreadyHaveAccountText,
  AlreadyHaveAccountContainer,
  AlreadyHaveAccountButton,
  AlreadyHaveAccountButtonText,
} from "./styles";

import { useState } from "react";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { FireStoreService } from "../../services/firestoreService";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  async function createAccount(
    email: string,
    password: string,
    name: string,
    photoURL: string
  ) {
    if (email !== "" && password !== "" && name !== "") {
      setLoading(true);
      try {
        await new FireStoreService().createUser(
          email,
          password,
          name,
          photoURL
        );
        Alert.alert(
          "Sucesso",
          "Conta criada com sucesso! Aproveite ao máximo nosso app!"
        );
        setLoading(false);
        navigation.navigate("AppRoutes");
      } catch (e) {
        console.log(e);
        Alert.alert(
          "ERRO",
          "Não foi possível criar sua conta! Verifique os dados e tente novamente!"
        );
        setLoading(false);
      }
    } else {
      Alert.alert("ERRO", "Nenhum campo pode ficar vazio!");
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={"position"}
        keyboardVerticalOffset={-47}
      >
        <Pressable onPress={() => Keyboard.dismiss()}>
          <Header>
            <HeaderLogo source={require("../../assets/packageLogo.png")} />
            <HeaderTitle>
              Vamos começar criando{"\n"}uma conta para vc!😁
            </HeaderTitle>
          </Header>

          <Body>
            <InputApp
              label="seu nome:"
              placeholder="Lucas"
              value={name}
              onChangeText={setName}
            />
            <InputApp
              label="seu email:"
              placeholder="teste@gmail.com"
              value={email}
              onChangeText={setEmail}
            />
            <InputApp
              label="sua senha:"
              placeholder="********"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={showPassword}
            />
            <IconShowPassword onPress={() => setShowPassword(!showPassword)}>
              <Feather name="eye" size={24} color="#C8CCD2" />
            </IconShowPassword>
            <AlreadyHaveAccountContainer>
              <AlreadyHaveAccountText>Já tem conta?</AlreadyHaveAccountText>
              <AlreadyHaveAccountButton
                onPress={() => navigation.navigate("Login")}
              >
                <AlreadyHaveAccountButtonText>
                  Toque aqui!
                </AlreadyHaveAccountButtonText>
              </AlreadyHaveAccountButton>
            </AlreadyHaveAccountContainer>
          </Body>

          <Footer>
            <Button
              onPress={() =>
                createAccount(
                  email.trim(),
                  password.trim(),
                  name.trim(),
                  "https://1.gravatar.com/avatar/1e752bcd3919534fb7b58fd9e185bdb9?s=320&d=mm&r=g"
                )
              }
            >
              <ButtonText>{loading ? "Criando..." : "Criar"}</ButtonText>
            </Button>
          </Footer>
        </Pressable>
      </KeyboardAvoidingView>
    </Container>
  );
}
