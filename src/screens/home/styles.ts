import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 80px;
  margin-left: 30px;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
  justify-content: space-between;
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
`;

export const HeaderPhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const HeaderGreetingTitle = styled.Text`
  font-family: Lexend_300Light;
  font-size: 16px;
`;

export const HeaderRight = styled.View``;

export const HeaderLocation = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const HeaderLocationText = styled.Text`
  font-family: Lexend_300Light;
  font-size: 14px;
`;

export const SearchContainer = styled.View`
  margin-top: 60px;
  align-items: center;
`;

export const SearchPackage = styled.TextInput`
  width: 300px;
  height: 50px;
  border-radius: 30px;
  background-color: white;
  padding-left: 50px;
  padding-right: 50px;
  font-family: Lexend_400Regular;
  font-size: 13px;
`;

export const IconPackage = styled.View`
  position: absolute;
  left: 73px;
  top: 14px;
`;

export const Body = styled.View`
  margin-top: 40px;
`;

export const BodyTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 18px;
  margin-left: 30px;
`;
