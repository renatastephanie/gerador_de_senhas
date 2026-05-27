import styled from "styled-components";
import type { PasswordOptions as PasswordOptionsType } from "../types/password";
import { OptionItem } from "./OptionItem";

interface Props {
  options: PasswordOptionsType
  onChange:(options: PasswordOptionsType) => void
}

const SettingsWrapper = styled.div`
  margin: 1.5rem;
`

const Title = styled.label`
  font-weight: 600;
  color: #fff;
  display: block;
  margin-bottom: 0.75rem;
`

const OptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  list-style: none;
  padding: 0;
`

export const PasswordOptions = ({options, onChange}: Props) => {
  const handleChange = (key: keyof PasswordOptionsType) => (checked: boolean) => {
    onChange({ ...options, [key]: checked})
  }

  return (
    <SettingsWrapper>
      <Title>Configuração de Senha</Title>
      <OptionsList>
        <OptionItem
          id="lowercase"
          label="Minúsculas (a-z)"
          checked={options.lowercase}
          onChange={handleChange("lowercase")}
        />
        <OptionItem
          id="uppercase"
          label="Maiúsculas (A-Z)"
          checked={options.uppercase}
          onChange={handleChange("uppercase")}
        />
        <OptionItem
          id="numbers"
          label="Números (0-9)"
          checked={options.numbers}
          onChange={handleChange("numbers")}
        />
        <OptionItem
          id="symbols"
          label="Símbolos (!-$^+)"
          checked={options.symbols}
          onChange={handleChange("symbols")}
        />
        <OptionItem
          id="excludeDuplicates"
          label="Sem Duplicatas"
          checked={options.excludeDuplicates}
          onChange={handleChange("excludeDuplicates")}
        />
        <OptionItem
          id="spaces"
          label="Incluir Espaços"
          checked={options.spaces}
          onChange={handleChange("spaces")}
        />
      </OptionsList>
    </SettingsWrapper>
  );
}
  