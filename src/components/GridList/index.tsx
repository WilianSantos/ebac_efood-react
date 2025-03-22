import Food from '../../models/Food'
import RestaurantModel from '../../models/Restaurant'
import Card from '../Card'
import Restaurant from '../Restaurant'
import { GridListContainer } from './styles'

export type GridListProps = {
  restaurants?: RestaurantModel[]
  isRestaurant: boolean
  foods?: Food[]
  columnGrid?: 2 | 3
}

const GridList = ({ restaurants, isRestaurant, foods }: GridListProps) => {
  return (
    <GridListContainer columnGrid={isRestaurant ? 2 : 3}>
      {isRestaurant
        ? restaurants?.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              name={restaurant.name}
              category={restaurant.category}
              description={restaurant.description}
              image={restaurant.image}
              rating={restaurant.rating}
              infos={restaurant.infos}
            />
          ))
        : foods?.map((food) => (
            <Card
              key={food.id}
              name={food.name}
              description={food.description}
              image={food.image}
            />
          ))}
    </GridListContainer>
  )
}

export default GridList
