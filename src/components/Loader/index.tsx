import { FadeLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <FadeLoader color={colors.primary} />
  </Container>
)

export default Loader
