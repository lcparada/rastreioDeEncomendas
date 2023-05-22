import ModalOrder from "../modalOrder";

import {
  OrderBackgroundOrderPhoto,
  OrderCode,
  OrderContainer,
  OrderDataInfo,
  OrderDataInfoTitle,
  OrderDataInfoValue,
  OrderInfo,
  OrderLeft,
  OrderPhoto,
  OrderRight,
  OrderTitle,
} from "./styles";

type OrdersProps = {
  nameOrder: string;
  trackingCode: string;
  date: string;
};

import { useEffect, useState } from "react";

export default function Orders(props: OrdersProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [lastStatus, setlastStatus] = useState<string | undefined>();

  return (
    <OrderContainer
      style={{ elevation: 4 }}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <OrderRight>
        <OrderBackgroundOrderPhoto>
          <OrderPhoto source={require("../../assets/package.png")} />
        </OrderBackgroundOrderPhoto>

        <OrderInfo>
          <OrderTitle>{props.nameOrder}</OrderTitle>
          <OrderCode>{props.trackingCode}</OrderCode>
        </OrderInfo>
      </OrderRight>

      <OrderLeft>
        <OrderDataInfo>
          <OrderDataInfoTitle>Criado em</OrderDataInfoTitle>
          <OrderDataInfoValue>{props.date}</OrderDataInfoValue>
        </OrderDataInfo>
      </OrderLeft>

      <ModalOrder
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        nameOrder={props.nameOrder}
        trackingCode={props.trackingCode}
      />
    </OrderContainer>
  );
}
