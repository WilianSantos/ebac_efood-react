import Hero from '../../components/Hero'
import ProductList from '../../components/GridList'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

import { Container } from '../../styles'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <Loader />
  }

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
