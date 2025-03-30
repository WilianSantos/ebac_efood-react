import Card from '../Card'
import Establishment from '../Establishment'

import { GridListContainer } from './styles'

export type GridListProps = {
  restaurants?: Restaurant[]
  isRestaurant: boolean
  columnGrid?: 2 | 3
  menu?: Menu[]
}

const GridList = ({ restaurants, isRestaurant, menu }: GridListProps) => {
  return (
    <GridListContainer columnGrid={isRestaurant ? 2 : 3}>
      {isRestaurant
        ? restaurants?.map((restaurant) => (
            <Establishment
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
        : menu?.map((food) => <Card key={food.id} menu={food} />)}
    </GridListContainer>
  )
}

export default GridList
