import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerTitle = styled.View`
  position: relative;
  top: 70px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 20px;
  color: #000;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 30px;
`;

export const Header = styled.View`
  margin-top: 120px;
  margin-left: 30px;
  flex-direction: row;
  column-gap: 30px;
  align-items: center;
`;

export const HeaderPhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const HeaderChangePhotoText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: #000;
`;

export const Body = styled.View`
  margin-left: 30px;
  margin-top: 40px;
  row-gap: 20px;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 60px;
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
