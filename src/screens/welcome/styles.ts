import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f7f8f8;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const Title = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 20px;
  text-align: center;
  margin-top: 70px;
`;

export const SubTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #c8ccd2;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 70px;
  border-radius: 30px;
  background-color: #f8ae39;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

export const ButtonText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #fff;
`;
