import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import { formatPrice, limitingString } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import * as S from './styles'
import btnClose from '../../assets/images/close.png'
import { Overlay } from '../../styles'

type CardProps = {
  menu: Menu
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
      <S.CardContainer>
        <S.CardImage src={menu.foto} alt={menu.nome} />
        <div>
          <S.CardTitle>{menu.nome}</S.CardTitle>
          <S.CardDescription>
            {limitingString(menu.descricao)}
          </S.CardDescription>
          <Button
            background="light"
            width="100%"
            onClick={() => setIsActive(true)}
          >
            Mais detalhes
          </Button>
        </div>
      </S.CardContainer>

      {isActive && (
        <>
          <S.Modal className="card-action">
            <S.CardImage src={menu.foto} alt={menu.nome} />
            <div>
              <S.CardTitle>{menu.foto}</S.CardTitle>
              <S.CardDescription>
                {menu.descricao}
                <br />
                <br />
                <span>{'Serve: de ' + menu.porcao}</span>
              </S.CardDescription>
              <Button onClick={addToCart} background="light">
                {'Adicionar ao carrinho - ' + formatPrice(menu.preco)}
              </Button>
            </div>
          </S.Modal>
          <Overlay onClick={() => setIsActive(false)} />
          <S.CardClose
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
