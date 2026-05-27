import styled from "styled-components";

interface Props {
  onClick: () => void
}

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  background: linear-gradient(135deg, #46496e, #5c6090);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, #3b3e59, #50547a);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 3px solid #b3b8e6;
    outline-offset: 2px;
  }
`

export const GenerateButton = ({ onClick}: Props) => {
  return (
    <Button onClick={onClick}>Gerar Senha</Button>
  )
}