import React, { ReactNode } from "react";
import styled from "styled-components";

type size = "small" | "medium" | "big";

interface Props {
  children?: ReactNode;
  type?: "submit" | "button" | "reset";
  onChildClick?(...args: any): any;
  size?: size;
}

const ButtonComponent: React.FC<Props> = ({
  children,
  type,
  onChildClick,
  size,
}) => {
  const handleClick = (e: any) => {
    if (onChildClick) {
      onChildClick(e);
    }
  };
  return (
    <Button type={type ? type : "button"} onClick={handleClick} size={size}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default ButtonComponent;

interface ButtonType {
  size?: size;
}

const Button = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 130px;
  height: ${(props) => {
    if (props.size === "small") {
      return "30px";
    } else if (props.size === "big") {
      return "70px";
    } else {
      return "50px";
    }
  }};
  background-color: #fcfcfc;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const ButtonText = styled.p`
  color: #757575;
  font-weight: bold;
  font-size: 14px;
`;
