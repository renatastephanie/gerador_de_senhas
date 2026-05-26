import { useState } from "react";
import styled from "styled-components";

interface Props {
  password: string;
}

const InputBox = styled.div`
  position: relative;
  margin-bottom: 1rem;
`
const PasswordInput = styled.input`
  width: 100%;
  height: 53px;
  background: #7b82a6;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  padding: 0 3rem 0 1rem;
  letter-spacing: 1.2px;
  outline: none;
  transition: background 0.2s ease;

  &::placeholder{
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus{
    background: #6e7496;
  }
`

const CopyButton = styled.span<{ $copied: boolean }>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  opacity: ${({ $copied }) => ($copied ? 1 : 0.7)};
  transition: opacity 0.2s ease;

  &:hover{
    opacity: 1;
  }
`

export const PasswordDisplay = ({ password }: Props) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (!password) return
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true)
      setTimeout(()=> setCopied(false),2000)
    })
  }

  return (
    <InputBox>
      <PasswordInput
        value={password}
        readOnly
        placeholder="CLique em gerar..."
      />

      <CopyButton $copied={copied} onClick={handleCopy}>
        {copied ? 'Copied' : 'Copy'}
      </CopyButton>
    </InputBox>
  );
}