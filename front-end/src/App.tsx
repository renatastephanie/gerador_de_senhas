import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import type { PasswordOptions } from "./types/password";
import { generatePassword } from "./utils/generatePassword";
import { PasswordDisplay } from "./components/PasswordDisplay";
import { PasswordOptions as PasswordOptionsComponent } from "./components/PasswordOptions";
import { GenerateButton } from "./components/GenerateButton";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #e8eaf6;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
`;

const Container = styled.div`
  width: min(450px, 90%);
  background: #8c92bb;
  border-radius: 10px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  padding: 1rem 1.75rem;
  border-bottom: 1px solid #858bb2;
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
`;

const Wrapper = styled.div`
  padding: 1.25rem;
`;

const initialOptions: PasswordOptions = {
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true,
  excludeDuplicates: false,
  spaces: false,
  length: 12,
};

function App() {
  const [options, setOptions] = useState<PasswordOptions>(initialOptions);
  const [password, setPassword] = useState("");

  const handleGenerate = () => {
    const newPassword = generatePassword(options);
    setPassword(newPassword);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Gerador de Senhas</Title>
        <Wrapper>
          <PasswordDisplay password={password} />
          <PasswordOptionsComponent options={options} onChange={setOptions} />
          <GenerateButton onClick={handleGenerate}/>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
