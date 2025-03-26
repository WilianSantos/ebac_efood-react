import { useState } from 'react'

import {
  CardClose,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
  Modal,
  Overlay
} from './styles'
import btnClose from '../../assets/images/close.png'

import Button from '../Button'
import { limitingString } from '../Restaurant'

type CardProps = {
  photo: string
  name: string
  description: string
  price: number
  portion: string
}

const Card = ({ name, description, photo, price, portion }: CardProps) => {
  const [isActive, setIsActive] = useState(false)

  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <CardContainer>
        <CardImage src={photo} alt={name} />
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{limitingString(description)}</CardDescription>
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
            <CardImage src={photo} alt={name} />
            <div>
              <CardTitle>{name}</CardTitle>
              <CardDescription>
                {description}
                <br />
                <br />
                <span>{'Serve: de ' + portion}</span>
              </CardDescription>
              <Button background="light">
                {'Adicionar ao carrinho - ' + formatPrice(price)}
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
