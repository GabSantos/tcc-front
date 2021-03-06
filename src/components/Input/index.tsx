import React from 'react';
import { TextProps, TextInput, TextInputProps } from 'react-native';

import { Container, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ icon, placeholder, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color="#5E5E62" />
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#5E5E62"
      placeholder={placeholder}
      style={{ fontSize: 18 }}
      {...rest}
    />
  </Container>
);

export default Input;
