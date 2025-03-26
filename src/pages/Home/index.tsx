import { useEffect, useState } from 'react'

import { Container } from '../../styles'

import Restaurant from '../../models/Restaurant'

import Hero from '../../components/Hero'
import ProductList from '../../components/GridList'
import Footer from '../../components/Footer'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
  }, [])
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
