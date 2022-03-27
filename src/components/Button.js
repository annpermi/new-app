import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../style/variables";
const buttonShearedStyle = css`
  background: ${({ primary }) => (primary ? COLORS.grey : COLORS.orange)};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? COLORS.white : COLORS.grey)};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  border-radius: ${({ round }) => (round ? "50px" : "0px")};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Button = styled(Link)`
  ${buttonShearedStyle}
`;

export const SubmitButton = styled.button`
  ${buttonShearedStyle}
`;
