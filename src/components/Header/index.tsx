import { Link } from 'react-router-dom'

import { Container } from '../../styles'
import { HeaderContainer } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <span>Restaurantes</span>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <span>0 produto(s) no carrinho</span>
      </Container>
    </HeaderContainer>
  )
}

export default Header
