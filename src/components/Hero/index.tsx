import { Container } from '../../styles'
import { HeroContainer, TitleHero } from './styles'
import logo from '../../assets/images/logo.png'

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <img src={logo} alt="Logo" />
        <TitleHero>
          Viva experiências gastronômicas no conforto da sua casa
        </TitleHero>
      </Container>
    </HeroContainer>
  )
}

export default Hero
