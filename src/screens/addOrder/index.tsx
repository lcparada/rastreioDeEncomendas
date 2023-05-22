import { Alert, Keyboard, KeyboardAvoidingView, Pressable } from "react-native";
import InputApp from "../../components/input";
import {
  Body,
  Button,
  ButtonText,
  Container,
  Footer,
  Header,
  HeaderTitle,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { FireStoreService } from "../../services/firestoreService";
import { addZeroToNumbersLessThanTen } from "../../helpers/helpers";

export default function AddOrder() {
  const [nameOrder, setNameOrder] = useState<string>("");
  const [trackingCode, setTrackingCode] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  async function createOrder(nameOrder: string, trackingCode: string) {
    setLoading(true);
    if (nameOrder !== "" && trackingCode !== "") {
      try {
        await new FireStoreService().createOrderInFirestore(
          new FireStoreService().getInformationUser()[3],
          {
            nameOrder: nameOrder,
            trackingCode: trackingCode,
            date: `${addZeroToNumbersLessThanTen(
              new Date().getDate()
            )}/${addZeroToNumbersLessThanTen(
              new Date().getMonth() + 1
            )}/${new Date().getFullYear()}`,
          }
        );
        setLoading(false);
        navigation.navigate("Home");
        setNameOrder("");
        setTrackingCode("");
      } catch (e) {
        console.log(e);
        Alert.alert(
          "Erro ao criar encomenda",
          "Verifique os dados e tente novamente"
        );
        setLoading(false);
      }
    } else {
      Alert.alert("ERRO", "Os campos não podem estar vazios");
      setLoading(false);
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={-47}>
        <Pressable onPress={Keyboard.dismiss}>
          <Header>
            <HeaderTitle>Crie sua encomenda</HeaderTitle>
            <Ionicons name="cube-outline" size={36} color="black" />
          </Header>

          <Body>
            <InputApp
              label="qual nome da sua encomenda?"
              placeholder="GeForce GTX 1050 TI"
              value={nameOrder}
              onChangeText={setNameOrder}
            ></InputApp>
            <InputApp
              label="qual código de rastreio?"
              placeholder="Ex: SW127231646BR"
              value={trackingCode}
              onChangeText={setTrackingCode}
            ></InputApp>
          </Body>

          <Footer>
            <Button
              disabled={loading}
              onPress={() => createOrder(nameOrder, trackingCode)}
            >
              <ButtonText>
                {loading ? "Criando encomenda..." : "Criar encomenda"}
              </ButtonText>
            </Button>
          </Footer>
        </Pressable>
      </KeyboardAvoidingView>
    </Container>
  );
}
