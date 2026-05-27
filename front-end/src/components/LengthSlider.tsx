import styled from "styled-components";

interface Props {
  value: number
  onChange: (value: number) => void
}

const Wrapper = styled.div`
  margin-top: 1.5rem;
`

const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

const SliderLabel = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
`

const SliderValue = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  background: #46496e;
  padding: 0%.15rem 0.6rem;
  border-radius: 4px;
`

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #46496e;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    background: #e8eaf6;
  }
`
export const LengthSlider = ({value, onChange}: Props) => {
  return (
    <Wrapper>
      <SliderHeader>
        <SliderLabel>Comprimento</SliderLabel>
        <SliderValue>{value}</SliderValue>
      </SliderHeader>

      <Slider
        type="range"
        min={6}
        max={32}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </Wrapper>
  )
}