import styled from 'styled-components'
import heroImage from '../../assets/images/vector.png'
import { colors, Container } from '../../styles'

export const HeroContainer = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 64px 0 40px 0;
  margin-bottom: 80px;

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 136px;
    }
  }
`

export const TitleHero = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  margin-bottom: 40px;
  max-width: 539px;
  text-align: center;
`
