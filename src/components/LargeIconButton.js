import styled, { css } from "styled-components";

export const LargeIconButton = styled.button`
  background: #feed9b;
  border-radius: 12px 10px 12px 10px;
  border: none;
  color: #7a673f;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  height: 180px;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 180px;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
