import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const Header = styled.View`
  margin-top: 80px;
  margin-left: 30px;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const HeaderTitle = styled.Text`
  font-family: Lexend_700Bold;
  color: #000;
  font-size: 22px;
`;

export const Body = styled.View`
  margin-left: 30px;
  margin-top: 40px;
  row-gap: 20px;
`;

export const Footer = styled.View`
  align-items: center;
  margin-top: 100px;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 70px;
  border-radius: 30px;
  background-color: #f8ae39;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #fff;
`;
