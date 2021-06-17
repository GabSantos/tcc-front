import React from 'react';
import { TextInputProps, TextInput } from 'react-native';

import { Container, Label, OutContainer } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  placeholder?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, ...rest }) => {
  if (label) {
    return (
      <OutContainer>
        <Label>{label} :</Label>
        <Container>
          <TextInput
            {...rest}
            keyboardAppearance="dark"
            placeholderTextColor="#5E5E62"
            placeholder={placeholder}
            style={{ fontSize: 18 }}
          />
        </Container>
      </OutContainer>
    );
  }
  return (
    <Container>
      <TextInput
        {...rest}
        keyboardAppearance="dark"
        placeholderTextColor="#5E5E62"
        placeholder={placeholder}
        style={{ fontSize: 18 }}
      />
    </Container>
  );
};

export default Input;
