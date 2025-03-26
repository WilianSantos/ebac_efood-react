import { GridListContainer } from './styles'

import RestaurantModel from '../../models/Restaurant'

import Card from '../Card'
import Restaurant from '../Restaurant'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type GridListProps = {
  restaurants?: RestaurantModel[]
  isRestaurant: boolean
  columnGrid?: 2 | 3
  menu?: Cardapio[]
}

const GridList = ({ restaurants, isRestaurant, menu }: GridListProps) => {
  return (
    <GridListContainer columnGrid={isRestaurant ? 2 : 3}>
      {isRestaurant
        ? restaurants?.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.titulo}
              highlighted={restaurant.destacado}
              type={restaurant.tipo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
              cover={restaurant.capa}
            />
          ))
        : menu?.map((food) => (
            <Card
              key={food.id}
              name={food.nome}
              description={food.descricao}
              photo={food.foto}
              price={food.preco}
              portion={food.porcao}
            />
          ))}
    </GridListContainer>
  )
}

export default GridList
