import Button from '../Button'
import { CardContainer, CardDescription, CardImage, CardName } from './styles'

type CardProps = {
  name: string
  description: string
  image: string
}

const Card = ({ name, description, image }: CardProps) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardName>{name}</CardName>
      <CardDescription>{description}</CardDescription>
      <Button background="light">Adicionar ao carrinho</Button>
    </CardContainer>
  )
}

export default Card
