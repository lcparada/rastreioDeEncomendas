import { Circle, Container, TextCircle } from "./styles";

import { Feather } from "@expo/vector-icons";

type ButtonOptionProfileProps = {
  icon: any;
  text: string;
  color: string;
  onPress: () => void;
};

export default function ButtonOptionProfile(props: ButtonOptionProfileProps) {
  return (
    <Container onPress={props.onPress}>
      <Circle color={props.color}>
        <Feather name={props.icon} size={24} color="white" />
      </Circle>
      <TextCircle>{props.text}</TextCircle>
    </Container>
  );
}
