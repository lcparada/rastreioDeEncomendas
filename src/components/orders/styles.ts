import styled from "styled-components/native";

export const OrderContainer = styled.TouchableOpacity`
  width: 350px;
  height: 50px;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;
`;

export const OrderRight = styled.View`
  flex-direction: row;
  column-gap: 10px;
`;

export const OrderLeft = styled.View``;

export const OrderBackgroundOrderPhoto = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background-color: #f8ae39;
  align-items: center;
  justify-content: center;
`;

export const OrderPhoto = styled.Image`
  width: 30px;
  height: 30px;
`;

export const OrderInfo = styled.View``;

export const OrderTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 14px;
  color: #424141;
`;

export const OrderCode = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 12px;
  color: #c8ccd2;
`;

export const OrderDataInfo = styled.View`
  align-items: center;
`;

export const OrderDataInfoTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 12px;
  color: #424141;
`;

export const OrderDataInfoValue = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 10px;
  color: #c8ccd2;
`;
