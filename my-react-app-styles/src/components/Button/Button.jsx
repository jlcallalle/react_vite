import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.blue ? "blue" : "gray"};
`;

// eslint-disable-next-line react/prop-types
const Button = ({ children, blue }) => {
  return <StyledButton blue={blue}>{children}</StyledButton>
}

export default Button;