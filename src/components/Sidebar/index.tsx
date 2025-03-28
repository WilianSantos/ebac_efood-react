import {
  Item,
  ItensContainer,
  Container,
  RemoveItem,
  SidebarContainer
} from './styles'

import Button from '../Button'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, open } from '../../store/reducers/cart'
import { formatPrice } from '../Card'
import { Overlay } from '../../styles'

const Sidebar = () => {
  const { isOpen, items, total } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SidebarContainer>
        <ItensContainer>
          {items.map((item) => (
            <Item>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h5>{item.nome}</h5>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <RemoveItem onClick={() => removeItem(item.id)} />
            </Item>
          ))}
        </ItensContainer>

        <p>
          Valor total <span>{formatPrice(total)}</span>
        </p>

        <Button width="100%" background="light">
          Continuar com a entrega
        </Button>
      </SidebarContainer>
    </Container>
  )
}

export default Sidebar
