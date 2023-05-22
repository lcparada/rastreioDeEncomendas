import { Container, Input, InputLabel } from "./styles";

import { TextInputProps } from "react-native";

type InputRegisterProps = TextInputProps & {
  label: string;
};

export default function InputApp(props: InputRegisterProps) {
  return (
    <Container>
      <InputLabel>{props.label}</InputLabel>
      <Input
        style={{ elevation: 1 }}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
      ></Input>
    </Container>
  );
}
