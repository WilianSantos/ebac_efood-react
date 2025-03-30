import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { formatPrice } from '../Card'
import Button from '../Button'

import { Overlay } from '../../styles'
import * as S from './styles'

const Sidebar = () => {
  const { isOpen, items, total } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [isCart, setIsCart] = useState(true)
  const [isDeliveryForm, setIsDeliveryForm] = useState(false)
  const [isPaymentForm, setIsPaymentForm] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleCart = () => {
    setIsCart(true)
    setIsPaymentForm(false)
    setIsDeliveryForm(false)
  }

  const handleDelivery = () => {
    setIsDeliveryForm(true)
    setIsPaymentForm(false)
    setIsCart(false)
  }

  const handlePayment = () => {
    setIsPaymentForm(true)
    setIsDeliveryForm(false)
    setIsCart(false)
  }
  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <S.SidebarContainer>
        {/* Renderização do Cart */}
        {isCart && !isDeliveryForm && !isPaymentForm && (
          <>
            <S.ItensContainer>
              {items.map((item) => (
                <S.Item>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <span>{formatPrice(item.preco)}</span>
                  </div>
                  <S.RemoveItem onClick={() => removeItem(item.id)} />
                </S.Item>
              ))}
            </S.ItensContainer>

            <p>
              Valor total <span>{formatPrice(total)}</span>
            </p>

            <Button width="100%" background="light" onClick={handleDelivery}>
              Continuar com a entrega
            </Button>
          </>
        )}

        {/* Renderização do Formulario de endereço */}
        {isDeliveryForm && !isPaymentForm && !isCart && (
          <>
            <S.Form>
              <h4>Entrega</h4>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input type="text" id="receiver" />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="description">Endereço</label>
                  <input type="text" id="description" />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input type="text" id="city" />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <input type="text" id="zipCode" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input type="text" id="number" />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opicional)</label>
                  <input type="text" id="complement" />
                </S.InputGroup>
              </S.FormRow>
            </S.Form>

            <Button width="100%" background="light" onClick={handlePayment}>
              Continuar com o pagamento
            </Button>
            <Button width="100%" background="light" onClick={handleCart}>
              Voltar para o carrinho
            </Button>
          </>
        )}

        {/* Renderização do Formulario de pagamento */}
        {isPaymentForm && !isDeliveryForm && !isCart && (
          <>
            <S.Form>
              <h4>Pagamento - Valor a pagar {formatPrice(total)}</h4>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="name">Nome no cartão</label>
                  <input type="text" id="name" />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="number">Número do cartão</label>
                  <input type="text" id="number" />
                </S.InputGroup>
                <S.InputGroup maxWidth="87px">
                  <label htmlFor="code">CVV</label>
                  <input type="text" id="code" />
                </S.InputGroup>
              </S.FormRow>

              <S.FormRow>
                <S.InputGroup>
                  <label htmlFor="month">Mes de vencimento</label>
                  <input type="text" id="month" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="year">Ano de vencimento</label>
                  <input type="text" id="year" />
                </S.InputGroup>
              </S.FormRow>
            </S.Form>

            <Button width="100%" background="light">
              Finalizar compra
            </Button>
            <Button width="100%" background="light" onClick={handleDelivery}>
              Voltar para a edição de endereço
            </Button>
          </>
        )}
      </S.SidebarContainer>
    </S.Container>
  )
}

export default Sidebar
