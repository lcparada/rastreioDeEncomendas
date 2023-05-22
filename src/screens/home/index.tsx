import {
  Body,
  BodyTitle,
  Container,
  Header,
  HeaderGreetingTitle,
  HeaderLeft,
  HeaderLocation,
  HeaderLocationText,
  HeaderPhoto,
  HeaderRight,
  IconPackage,
  SearchContainer,
  SearchPackage,
} from "./styles";

import {
  Text,
  Pressable,
  Keyboard,
  LogBox,
  FlatList,
  Alert,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import Orders from "../../components/orders";

import * as Location from "expo-location";

import { FireStoreService } from "../../services/firestoreService";

import { useEffect, useState } from "react";

import { OrdersModel } from "../../models/ordersModel";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  LogBox.ignoreAllLogs();

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const [ordersUser, setOrdersUser] = useState<OrdersModel[]>([]);

  const [searchTrackingCode, setSearchTrackingCode] = useState<string>("");

  const [list, setList] = useState<OrdersModel[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setName(new FireStoreService().getInformationUser()[0]);
      setImage(new FireStoreService().getInformationUser()[1]);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  async function getPermissions(): Promise<void> {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please granted location permissions");
      } else {
        let location = await Location.getCurrentPositionAsync({});
        let adress = await Location.reverseGeocodeAsync(location.coords);
        setCountry(adress[0].country as string);
        setRegion(adress[0].region as string);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPermissions();
  }, []);

  async function getData() {
    try {
      const receiveData = await new FireStoreService().getOrdersInFirestore(
        new FireStoreService().getInformationUser()[3]
      );
      setOrdersUser(receiveData as OrdersModel[]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getData();
    }, 500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setList(
      ordersUser.filter((item) =>
        item.trackingCode
          .toLowerCase()
          .includes(searchTrackingCode.toLowerCase())
      )
    );
  }, [searchTrackingCode]);

  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Pressable onPress={Keyboard.dismiss}>
          <Header>
            <HeaderLeft>
              <HeaderPhoto source={{ uri: image }} />
              <HeaderGreetingTitle>
                Oi,{"\n"}
                <Text style={{ fontFamily: "Lexend_700Bold" }}>{name}</Text>
              </HeaderGreetingTitle>
            </HeaderLeft>

            <HeaderRight>
              <HeaderLocation>
                <Feather name="map-pin" size={18} color="black" />
                <HeaderLocationText>
                  {country},{"\n"}
                  <Text style={{ fontFamily: "Lexend_700Bold" }}>{region}</Text>
                </HeaderLocationText>
              </HeaderLocation>
            </HeaderRight>
          </Header>

          <SearchContainer>
            <SearchPackage
              style={{ elevation: 3 }}
              placeholder="Digite o número de rastreio"
              cursorColor={"#000"}
              placeholderTextColor={"#C8CCD2"}
              value={searchTrackingCode}
              onChangeText={setSearchTrackingCode}
            ></SearchPackage>
            <IconPackage>
              <Feather name="package" size={24} color="#C8CCD2" />
            </IconPackage>
          </SearchContainer>

          <Body>
            <BodyTitle>Suas encomendas</BodyTitle>
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                height: "100%",
                width: "100%",
                paddingLeft: 30,
                rowGap: 10,
                paddingTop: 20,
              }}
              data={list}
              keyExtractor={(item) => item.trackingCode}
              renderItem={({ item }) => (
                <Orders
                  key={item.trackingCode}
                  date={item.date}
                  nameOrder={item.nameOrder}
                  trackingCode={item.trackingCode}
                />
              )}
            />
          </Body>
        </Pressable>
      </ScrollView>
    </Container>
  );
}
