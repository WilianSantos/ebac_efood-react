import { Container } from '../../styles'
import * as S from './styles'
import logo from '../../assets/images/logo.png'

const Hero = () => {
  return (
    <S.HeroContainer>
      <Container>
        <img src={logo} alt="Logo" />
        <S.TitleHero>
          Viva experiências gastronômicas no conforto da sua casa
        </S.TitleHero>
      </Container>
    </S.HeroContainer>
  )
}

export default Hero
