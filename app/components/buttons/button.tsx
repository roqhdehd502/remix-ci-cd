import type { MouseEventHandler, ReactNode  } from 'react';
import styled from 'styled-components';

import { EnumPallet } from 'types/enums/EnumPallet';

import { Pallet } from 'styles/colors';

export type TypeButtonValue = string | number;

export enum EnumButtonType { 
  Button = "button",
  Submit = "submit",
  Reset = "reset" 
}

export enum EnumButtonVariant {
  Text = "text",
  Contained = "contained",
  Outlined = "outlined",
}

interface Props {
  children?: ReactNode;
  value?: TypeButtonValue;
  type?: EnumButtonType;
  color?: EnumPallet;
  variant?: EnumButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({
  children,
  value,
  type = EnumButtonType.Button,
  color = EnumPallet.Primary,
  variant = EnumButtonVariant.Contained,
  onClick,
  disabled = false
}: Props) => {
  return (
    <Wrapper
      type={type}
      value={value}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  )
}

export default Button;

const Wrapper = styled.button<{ color: EnumPallet; variant: EnumButtonVariant; }>`
  width: auto;
  height: 1.5rem;
  padding: 0 1rem;
  // color:
  // background-color:
  // border
  border-radius: 0.75rem;
  font-size: 0.75rem;
  line-height: 1.5rem;
  cursor: pointer;
  line-height: 1;
`;
