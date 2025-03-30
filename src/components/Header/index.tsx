import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.png'
import { Container } from '../../styles'
import { HeaderContainer } from './styles'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderContainer>
      <Container>
        <span>Restaurantes</span>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <span onClick={openCart}>{items.length} produto(s) no carrinho</span>
      </Container>
    </HeaderContainer>
  )
}

export default Header
