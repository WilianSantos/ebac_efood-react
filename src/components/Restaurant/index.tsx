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
  name: string
  category: string
  description: string
  image: string
  rating: number
  infos: string[]
}

const Restaurant = ({
  name,
  category,
  description,
  image,
  rating,
  infos
}: RestaurantProps) => {
  return (
    <RestaurantContainer>
      <RestaurantImage src={image} alt={name} />
      <RestaurantInfos>
        <div>
          <h2>{name}</h2>
          <span>
            {rating}
            <FontAwesomeIcon icon={faStar} className="fa-star" />
          </span>
        </div>
        <RestaurantDescription>{description}</RestaurantDescription>
        <Link
          to="/profile"
          state={{ image: image, name: name, category: category }}
        >
          <Button background="dark">Saiba mais</Button>
        </Link>
      </RestaurantInfos>
      <RestaurantTags>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
        <Tag>{category}</Tag>
      </RestaurantTags>
    </RestaurantContainer>
  )
}

export default Restaurant
