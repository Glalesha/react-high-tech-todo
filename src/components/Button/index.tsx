import React from "react";
import styled from "styled-components";

const ButtonComponent: React.FC<any> = ({ children, type }) => {
  return (
    <Button type={type}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default ButtonComponent;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 130px;
  height: 50px;
  margin: auto;
  background-color: #fcfcfc;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const ButtonText = styled.p`
  color: #757575;
  font-weight: bold;
  font-size: 14px;
`;