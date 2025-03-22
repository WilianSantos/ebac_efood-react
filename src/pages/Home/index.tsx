import { Container } from '../../styles'
import sushiImage from '../../assets/images/sushi.png'
import trattoriaImage from '../../assets/images/trattoria.png'

import Hero from '../../components/Hero'
import ProductList from '../../components/GridList'

import Restaurant from '../../models/Restaurant'
import Footer from '../../components/Footer'

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    category: 'Japonesa',
    image: sushiImage,
    rating: 4.9,
    infos: ['Destaque da semana']
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: trattoriaImage,
    rating: 4.6,
    infos: []
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: trattoriaImage,
    rating: 4.6,
    infos: []
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: trattoriaImage,
    rating: 4.6,
    infos: []
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: trattoriaImage,
    rating: 4.6,
    infos: []
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: trattoriaImage,
    rating: 4.6,
    infos: []
  }
]

const Home = () => {
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
