import styled from "styled-components";

interface Props {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const OptionWrapper = styled.li`
  display: flex;
  align-items: center;
  width: calc(50% - 0.5rem);
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  min-width: 18px;
  border-radius: 4px;
  border: 2px solid #46496e;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  margin-right: 0.5rem;

  &:checked::before {
    background-color: #46496e;
  }

  &:checked::before{
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 2px;
  }
`;

const Label = styled.label`
  cursor: pointer;
  color: #fff;
  user-select: none;
  font-size: 0.95;
`;

export const OptionItem = ({ id, label, checked, onChange }: Props) => {
  return (
    <OptionWrapper>
      <Checkbox
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Label htmlFor={id}>{label}</Label>
    </OptionWrapper>
  );
};
