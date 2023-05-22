import {
  Body,
  ContainerLine,
  Header,
  LineBall,
  Line,
  SituationContainer,
  SituationText,
  SituationSubText,
  Footer,
  Button,
  ButtonText,
  Container,
  Title,
} from "./styles";

import { View } from "react-native";

import { useQuery } from "@tanstack/react-query";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

type ModalOrderProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  nameOrder: string;
  trackingCode: string;
};

export default function ModalOrder(props: ModalOrderProps) {
  // const { data } = useQuery(["orders"], () =>
  //   api.getStatusOrder(props.trackingCode)
  // );

  const [lastStatus, setLastStatus] = useState<string>("");

  async function getData() {
    const data = await api
      .getStatusOrder(props.trackingCode)
      .then((response) => response.eventos[0].status)
      .catch((error) => console.log(error));
    setLastStatus(data as string);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getData();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   console.log(props.trackingCode);
  //   console.log(data?.eventos[0]?.status);
  // }, []);

  return (
    <Container animationType="slide" visible={props.modalVisible}>
      <Header>
        <Title>{props.nameOrder} 📦</Title>
      </Header>

      {lastStatus === "Objeto entregue ao destinatário" ? (
        <Body>
          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto postado!😊</SituationText>
              <SituationSubText>
                Seu produto foi postado com sucesso!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto na transportadora!😮‍💨</SituationText>
              <SituationSubText>
                Seu produto foi entregue a transportadora!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto em trânsito! 🚛</SituationText>
              <SituationSubText>
                Seu produto está indo para sua casa!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto entregue! ✅</SituationText>
              <SituationSubText>
                O produto chegou ao seu destino!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
            </ContainerLine>
          </SituationContainer>
        </Body>
      ) : lastStatus === "Objeto saiu para entrega ao destinatário" ? (
        <Body>
          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto postado!😊</SituationText>
              <SituationSubText>
                Seu produto foi postado com sucesso!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto na transportadora!😮‍💨</SituationText>
              <SituationSubText>
                Seu produto foi entregue a transportadora!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto em trânsito! 🚛</SituationText>
              <SituationSubText>
                Seu produto está indo para sua casa!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto entregue! ✅
              </SituationText>
              <SituationSubText>
                O produto chegou ao seu destino!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>
        </Body>
      ) : lastStatus === "Objeto encaminhado" ? (
        <Body>
          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto postado!😊</SituationText>
              <SituationSubText>
                Seu produto foi postado com sucesso!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto na transportadora!😮‍💨</SituationText>
              <SituationSubText>
                Seu produto foi entregue a transportadora!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto em trânsito! 🚛
              </SituationText>
              <SituationSubText>
                Seu produto está indo para sua casa!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto entregue! ✅
              </SituationText>
              <SituationSubText>
                O produto chegou ao seu destino!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>
        </Body>
      ) : lastStatus === "Objeto postado após o horário limite da unidade" ||
        "Objeto Postado " ||
        undefined ? (
        <Body>
          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText>Produto postado!😊</SituationText>
              <SituationSubText>
                Seu produto foi postado com sucesso!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto na transportadora!😮‍💨
              </SituationText>
              <SituationSubText>
                Seu produto foi entregue a transportadora!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto em trânsito! 🚛
              </SituationText>
              <SituationSubText>
                Seu produto está indo para sua casa!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto entregue! ✅
              </SituationText>
              <SituationSubText>
                O produto chegou ao seu destino!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>
        </Body>
      ) : (
        <Body>
          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto postado!😊
              </SituationText>
              <SituationSubText>
                Seu produto foi postado com sucesso!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto na transportadora!😮‍💨
              </SituationText>
              <SituationSubText>
                Seu produto foi entregue a transportadora!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto em trânsito! 🚛
              </SituationText>
              <SituationSubText>
                Seu produto está indo para sua casa!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
              <Line style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>

          <SituationContainer>
            <View style={{ width: 320 }}>
              <SituationText style={{ color: "#c8ccd2" }}>
                Produto entregue! ✅
              </SituationText>
              <SituationSubText>
                O produto chegou ao seu destino!
              </SituationSubText>
            </View>
            <ContainerLine>
              <LineBall style={{ backgroundColor: "#c8ccd2" }} />
            </ContainerLine>
          </SituationContainer>
        </Body>
      )}

      <Footer>
        <Button onPress={() => props.setModalVisible(!props.modalVisible)}>
          <ButtonText>Ok</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
}
