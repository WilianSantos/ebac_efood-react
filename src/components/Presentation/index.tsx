import { Container } from '../../styles'
import { PresentationContainer } from './styles'

export type PresentationProps = {
  name: string
  category: string
  imageUrl: string
}

const Presentation = ({ name, category, imageUrl }: PresentationProps) => {
  return (
    <PresentationContainer imageUrl={imageUrl}>
      <Container>
        <h2>{category}</h2>
        <h1>{name}</h1>
      </Container>
    </PresentationContainer>
  )
}

export default Presentation
