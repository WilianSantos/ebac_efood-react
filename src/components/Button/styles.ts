import styled from 'styled-components'
import { colors } from '../../styles'

import { ButtonProps } from '.'

export const ButtonContainer = styled.button<Omit<ButtonProps, 'children'>>`
  background-color: ${({ background }) =>
    background === 'dark' ? colors.primary : colors.backgroundLight};
  color: ${({ background }) =>
    background === 'dark' ? colors.white : colors.primary};
  padding: 4px 6px;
  ${({ width }) => width && `width: ${width}`};
  border: none;
  font-size: 14px;
  cursor: pointer;
`
