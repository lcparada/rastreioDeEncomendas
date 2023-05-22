import styled from "styled-components/native";

export const Container = styled.Modal`
  background-color: #f7f8f8;
`;

export const Header = styled.View`
  margin-top: 50px;
  margin-left: 30px;
`;

export const Title = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 20px;
  color: #000;
`;

export const Body = styled.View`
  margin-top: 60px;
`;

export const ContainerLine = styled.View`
  align-items: center;
  margin-left: 20px;
`;

export const Line = styled.View`
  height: 120px;
  width: 2px;
  background-color: #f8ae39;
`;

export const LineBall = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #f8ae39;
`;

export const SituationContainer = styled.View`
  margin-left: 30px;
  flex-direction: row;
`;

export const SituationText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 14px;
  color: #424141;
`;

export const SituationSubText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #c8ccd2;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 190px;
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
  color: white;
`;
