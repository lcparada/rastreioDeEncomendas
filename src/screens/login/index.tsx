import { useState } from "react";

import InputApp from "../../components/input";

import {
  Body,
  Button,
  ButtonText,
  Container,
  Footer,
  Header,
  IconShowPassword,
  Logo,
  NotAlreadyHaveAccountButton,
  NotAlreadyHaveAccountButtonText,
  NotAlreadyHaveAccountContainer,
  NotAlreadyHaveAccountText,
} from "./styles";

import { Feather } from "@expo/vector-icons";

import { Keyboard, Pressable, KeyboardAvoidingView, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FireStoreService } from "../../services/firestoreService";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  async function enterInApp(email: string, password: string) {
    setLoading(true);
    try {
      await new FireStoreService().signIn(email.trim(), password.trim());
      setLoading(false);
    } catch (e) {
      console.log(e);
      Alert.alert(
        "Erro",
        "Não foi possível entrar no app, verifique os campos"
      );
      setLoading(false);
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={-100}>
        <Pressable onPress={() => Keyboard.dismiss()}>
          <Header>
            <Logo source={require("../../assets/packageLogo.png")} />
          </Header>

          <Body>
            <InputApp
              label="seu email:"
              placeholder="teste@gmail.com"
              value={email}
              onChangeText={setEmail}
            />
            <InputApp
              label="sua senha:"
              placeholder="*********"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <IconShowPassword onPress={() => setShowPassword(!showPassword)}>
              <Feather name="eye" size={24} color="#C8CCD2" />
            </IconShowPassword>

            <NotAlreadyHaveAccountContainer>
              <NotAlreadyHaveAccountText>
                Não tem uma conta?
              </NotAlreadyHaveAccountText>
              <NotAlreadyHaveAccountButton
                onPress={() => navigation.navigate("Register")}
              >
                <NotAlreadyHaveAccountButtonText>
                  Clique aqui!
                </NotAlreadyHaveAccountButtonText>
              </NotAlreadyHaveAccountButton>
            </NotAlreadyHaveAccountContainer>
          </Body>
          <Footer>
            <Button
              onPress={() => enterInApp(email, password)}
              disabled={loading}
            >
              <ButtonText>{loading ? "Entrando..." : "Entrar"}</ButtonText>
            </Button>
          </Footer>
        </Pressable>
      </KeyboardAvoidingView>
    </Container>
  );
}
