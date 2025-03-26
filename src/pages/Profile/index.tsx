import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from '../../styles'

import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import GridList from '../../components/GridList'
import Footer from '../../components/Footer'

import Restaurant from '../../models/Restaurant'

const Profile = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setRestaurant(data))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />

      <Presentation
        title={restaurant.titulo}
        type={restaurant.tipo}
        cover={restaurant.capa}
      />

      <Container>
        <GridList isRestaurant={false} menu={restaurant.cardapio} />
      </Container>

      <Footer />
    </>
  )
}

export default Profile
