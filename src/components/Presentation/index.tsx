import { Container } from '../../styles'
import { PresentationContainer } from './styles'

type PresentationProps = {
  title: string
  type: string
  cover: string
}

const Presentation = ({ title, type, cover }: PresentationProps) => {
  return (
    <PresentationContainer style={{ backgroundImage: `url(${cover})` }}>
      <Container>
        <h2>{type}</h2>
        <h1>{title}</h1>
      </Container>
    </PresentationContainer>
  )
}

export default Presentation
