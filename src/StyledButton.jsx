import { Button } from "antd";
import { styled } from "styled-components";

const ScButton = styled(Button)`
  background-color: blueviolet;
`;

const StyledButton = () => {
  return <ScButton>Hola</ScButton>;
};

export default StyledButton;
