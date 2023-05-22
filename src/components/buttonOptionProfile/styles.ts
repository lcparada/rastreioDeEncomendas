import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

export const Circle = styled.View<{ color: string }>`
  width: 45px;
  height: 45px;
  border-radius: 40px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

export const TextCircle = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: #424141;
`;
