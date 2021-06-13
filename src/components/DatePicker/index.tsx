import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, Icon, OutContainer, Label } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon: string;
  label: string;
}

const DatePicker: React.FC<ButtonProps> = ({
  label,
  icon,
  children,
  ...rest
}) => (
  <OutContainer>
    {label !== '' && <Label>{label} </Label>}
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
      <Icon name={icon} size={20} color="#5E5E62" />
    </Container>
  </OutContainer>
);

export default DatePicker;
