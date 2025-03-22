import { useLocation } from 'react-router-dom'

import pizzaImage from '../../assets/images/pizza.png'

import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import GridList from '../../components/GridList'
import Food from '../../models/Food'
import { Container } from '../../styles'
import Footer from '../../components/Footer'

const foods: Food[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  }
]

const Profile = () => {
  const location = useLocation()
  const { image } = location.state || {}
  const { name } = location.state || {}
  const { category } = location.state || {}
  return (
    <>
      <Header />

      <Presentation name={name} category={category} imageUrl={image} />

      <Container>
        <GridList isRestaurant={false} foods={foods} />
      </Container>

      <Footer />
    </>
  )
}

export default Profile
