import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const Body = styled.View`
  row-gap: 20px;
`;

export const IconShowPassword = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 48px;
`;

export const NotAlreadyHaveAccountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
`;

export const NotAlreadyHaveAccountText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #424141;
`;

export const NotAlreadyHaveAccountButton = styled.TouchableOpacity``;

export const NotAlreadyHaveAccountButtonText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 14px;
  color: #f8ae39;
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
