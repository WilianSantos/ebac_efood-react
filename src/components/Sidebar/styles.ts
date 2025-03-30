import styled from 'styled-components'
import { colors } from '../../styles'
import removeIcon from '../../assets/images/recycling-bin-icon.png'

type InputGroupProps = {
  maxWidth?: string
}

export const Container = styled.aside`
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SidebarContainer = styled.form`
  width: 360px;
  height: 100vh;
  background-color: ${colors.primary};
  padding: 32px 8px;
  color: ${colors.backgroundDark};
  z-index: 1;
  overflow-y: scroll;

  p {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    font-weight: 700;
    margin-bottom: 8px;
  }
`

export const ItensContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 8px 0 12px 8px;
  background-color: ${colors.backgroundDark};
  color: ${colors.primary};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const RemoveItem = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  background-image: url(${removeIcon});
  background-size: cover;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }
`
export const FormRow = styled.div`
  display: flex;
  column-gap: 34px;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
  }

  input {
    padding: 8px;
    border: 1px solid ${colors.backgroundDark};
    background-color: ${colors.backgroundDark};
    color: ${colors.black};
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    height: 32px;
  }
`
