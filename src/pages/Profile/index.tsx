import { useParams } from 'react-router-dom'

import { Container } from '../../styles'

import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import GridList from '../../components/GridList'
import Footer from '../../components/Footer'

import { useGetRestaurantByIdQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantByIdQuery(id!)

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
