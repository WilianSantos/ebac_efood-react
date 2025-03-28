import { Container } from '../../styles'

import Hero from '../../components/Hero'
import ProductList from '../../components/GridList'
import Footer from '../../components/Footer'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  return (
    <>
      <Hero />

      <Container>
        <ProductList isRestaurant restaurants={restaurants} />
      </Container>

      <Footer />
    </>
  )
}

export default Home
