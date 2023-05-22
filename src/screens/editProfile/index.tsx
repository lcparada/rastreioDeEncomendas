import InputApp from "../../components/input";
import {
  Body,
  Button,
  ButtonBack,
  ButtonText,
  Container,
  ContainerTitle,
  Footer,
  Header,
  HeaderChangePhotoText,
  HeaderPhoto,
  Title,
} from "./styles";

import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  LogBox,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { FireStoreService } from "../../services/firestoreService";

import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

export default function EditProfile() {
  LogBox.ignoreAllLogs();

  const navigation = useNavigation();

  const [image, setImage] = useState<string>(
    new FireStoreService().getInformationUser()[1]
  );
  const [newName, setNewName] = useState<string>(
    new FireStoreService().getInformationUser()[0]
  );
  const [cep, setCep] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  async function updateInformationUser(
    newName: string,
    image: string
    // cep: string,
    // city: string,
    // state: string,
    // userId: string
  ) {
    setLoading(true);
    if (
      newName !== new FireStoreService().getInformationUser()[0] ||
      image !== new FireStoreService().getInformationUser()[1]
    ) {
      try {
        await new FireStoreService().updateProfileUser(newName, image);
        // await new FireStoreService().createUserInFirestore(userId, {
        //   cep,
        //   city,
        //   state,
        // });
        setLoading(false);
        navigation.navigate("Profile");
      } catch (e) {
        console.log(e);
        setLoading(false);
        Alert.alert("Erro ao atualizar as informações do usuário");
      }
    } else {
      navigation.navigate("Profile");
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={-30}>
        <Pressable onPress={() => Keyboard.dismiss()}>
          <ContainerTitle>
            <Title>Editar perfil</Title>
          </ContainerTitle>

          <ButtonBack onPress={() => navigation.navigate("Profile")}>
            <Feather name="arrow-left" size={30} color="black" />
          </ButtonBack>

          <Header>
            <HeaderPhoto source={{ uri: image }} />
            <TouchableOpacity onPress={pickImage}>
              <HeaderChangePhotoText>Mudar foto+</HeaderChangePhotoText>
            </TouchableOpacity>
          </Header>

          <Body>
            <InputApp
              label="seu nome:"
              value={newName}
              onChangeText={setNewName}
            />
            {/* <InputApp
              label="seu cep:"
              placeholder="23234211"
              value={cep}
              onChangeText={setCep}
            />
            <InputApp
              label="sua cidade:"
              placeholder="Rio de Janeiro"
              value={city}
              onChangeText={setCity}
            />
            <InputApp
              label="seu estado:"
              placeholder="Rio de Janeiro"
              value={state}
              onChangeText={setState}
            /> */}
          </Body>

          <Footer>
            <Button
              disabled={loading}
              onPress={() =>
                updateInformationUser(
                  newName,
                  image
                  // cep,
                  // city,
                  // state,
                  // new FireStoreService().getInformationUser()[3]
                )
              }
            >
              <ButtonText>{loading ? "Atualizando..." : "Ok"}</ButtonText>
            </Button>
          </Footer>
        </Pressable>
      </KeyboardAvoidingView>
    </Container>
  );
}
