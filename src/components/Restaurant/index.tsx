import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import {
  RestaurantContainer,
  RestaurantDescription,
  RestaurantImage,
  RestaurantInfos,
  RestaurantTags
} from './styles'

import Tag from '../Tag'
import Button from '../Button'

type RestaurantProps = {
  id: number
  title: string
  highlighted: boolean
  type: string
  rating: number
  description: string
  cover: string
}

export function limitingString(string: string) {
  if (string.length > 250) {
    return string.slice(0, 250) + '...'
  }
  return string
}

const Restaurant = ({
  id,
  title,
  highlighted,
  type,
  rating,
  description,
  cover
}: RestaurantProps) => {
  return (
    <RestaurantContainer>
      <RestaurantImage src={cover} alt={title} />
      <RestaurantInfos>
        <div>
          <h2>{title}</h2>
          <span>
            {rating}
            <FontAwesomeIcon icon={faStar} className="fa-star" />
          </span>
        </div>
        <RestaurantDescription>
          {limitingString(description)}
        </RestaurantDescription>
        <Link to={`/profile/${id}`}>
          <Button background="dark">Saiba mais</Button>
        </Link>
      </RestaurantInfos>
      <RestaurantTags>
        {highlighted && <Tag>Destaque da semana</Tag>}
        <Tag>{type}</Tag>
      </RestaurantTags>
    </RestaurantContainer>
  )
}

export default Restaurant
