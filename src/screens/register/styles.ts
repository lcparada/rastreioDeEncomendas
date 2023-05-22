import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const HeaderLogo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const HeaderTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

export const Body = styled.View`
  margin-top: 66px;
  align-items: center;
  row-gap: 20px;
`;

export const Footer = styled.View`
  align-items: center;
  margin-top: 90px;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 70px;
  background-color: #f8ae39;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #fff;
`;

export const IconShowPassword = styled.TouchableOpacity`
  position: absolute;
  right: 50px;
  bottom: 50px;
`;

export const AlreadyHaveAccountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const AlreadyHaveAccountText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #424141;
`;

export const AlreadyHaveAccountButton = styled.TouchableOpacity``;

export const AlreadyHaveAccountButtonText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 14px;
  color: #f8ae39;
`;
