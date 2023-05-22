import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 130px;
  align-items: center;
`;

export const HeaderPhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const HeaderName = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 20px;
  color: #000;
  margin-top: 8px;
`;

export const HeaderEmailContainer = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const HeaderEmailText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #a5a6a7;
`;

export const Body = styled.View`
  margin-left: 30px;
  margin-top: 60px;
  row-gap: 20px;
`;
