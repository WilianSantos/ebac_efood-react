import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  CardClose,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
  Modal
} from './styles'
import btnClose from '../../assets/images/close.png'
import { Overlay } from '../../styles'

import Button from '../Button'
import { limitingString } from '../Restaurant'

import { add, open } from '../../store/reducers/cart'

import Menu from '../../models/Menu'

type CardProps = {
  menu: Menu
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Card = ({ menu }: CardProps) => {
  const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }
  return (
    <>
      <CardContainer>
        <CardImage src={menu.foto} alt={menu.nome} />
        <div>
          <CardTitle>{menu.nome}</CardTitle>
          <CardDescription>{limitingString(menu.descricao)}</CardDescription>
          <Button
            background="light"
            width="100%"
            onClick={() => setIsActive(true)}
          >
            Mais detalhes
          </Button>
        </div>
      </CardContainer>

      {isActive && (
        <>
          <Modal className="card-action">
            <CardImage src={menu.foto} alt={menu.nome} />
            <div>
              <CardTitle>{menu.foto}</CardTitle>
              <CardDescription>
                {menu.descricao}
                <br />
                <br />
                <span>{'Serve: de ' + menu.porcao}</span>
              </CardDescription>
              <Button onClick={addToCart} background="light">
                {'Adicionar ao carrinho - ' + formatPrice(menu.preco)}
              </Button>
            </div>
          </Modal>
          <Overlay onClick={() => setIsActive(false)} />
          <CardClose
            src={btnClose}
            alt="Fechar"
            onClick={() => setIsActive(false)}
          />
        </>
      )}
    </>
  )
}

export default Card
