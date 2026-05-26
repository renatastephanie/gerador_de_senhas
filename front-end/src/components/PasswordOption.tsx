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

export const PasswordOption = ({options, onChange}: Props) => {
  const handleChange = (key: keyof PasswordOptionsType) => (checked: boolean) => {
    onChange({ ...options, [key]: checked})
  }

  return (
    <SettingsWrapper>
      <Title>Password Settings</Title>
      <OptionsList>
        <OptionItem
          id="lowercase"
          label="Lowercase (a-z)"
          checked={options.lowercase}
          onChange={handleChange("lowercase")}
        />
        <OptionItem
          id="uppercase"
          label="Uppercase (A-Z)"
          checked={options.uppercase}
          onChange={handleChange("uppercase")}
        />
        <OptionItem
          id="numbers"
          label="Numbers (0-9)"
          checked={options.numbers}
          onChange={handleChange("numbers")}
        />
        <OptionItem
          id="symbols"
          label="Symbols (!-$^+)"
          checked={options.symbols}
          onChange={handleChange("symbols")}
        />
        <OptionItem
          id="excludeDuplicates"
          label="Exclude Duplicate"
          checked={options.excludeDuplicates}
          onChange={handleChange("excludeDuplicates")}
        />
        <OptionItem
          id="spaces"
          label="Include Spaces"
          checked={options.spaces}
          onChange={handleChange("spaces")}
        />
      </OptionsList>
    </SettingsWrapper>
  );
}
  