import styled from 'styled-components'
import { PresentationProps } from '.'
import { colors, Container } from '../../styles'

export const PresentationContainer = styled.section<
  Omit<PresentationProps, 'name' | 'category'>
>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: 24px 0 32px;
  margin-bottom: 56px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  ${Container} {
    position: relative;
    color: ${colors.white};
    font-size: 32px;

    h2 {
      font-weight: 100;
      margin-bottom: 152px;
    }

    h1 {
      font-weight: 900;
  }
`
