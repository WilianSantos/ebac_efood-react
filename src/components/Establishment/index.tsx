import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Tag from '../Tag'
import Button from '../Button'

import { limitingString } from '../../utils'

import * as S from './styles'

type RestaurantProps = {
  id: number
  title: string
  highlighted: boolean
  type: string
  rating: number
  description: string
  cover: string
}

const Establishment = ({
  id,
  title,
  highlighted,
  type,
  rating,
  description,
  cover
}: RestaurantProps) => {
  return (
    <S.RestaurantContainer>
      <S.RestaurantImage src={cover} alt={title} />
      <S.RestaurantInfos>
        <div>
          <h2>{title}</h2>
          <span>
            {rating}
            <FontAwesomeIcon icon={faStar} className="fa-star" />
          </span>
        </div>
        <S.RestaurantDescription>
          {limitingString(description)}
        </S.RestaurantDescription>
        <Link to={`/profile/${id}`}>
          <Button background="dark">Saiba mais</Button>
        </Link>
      </S.RestaurantInfos>
      <S.RestaurantTags>
        {highlighted && <Tag>Destaque da semana</Tag>}
        <Tag>{type}</Tag>
      </S.RestaurantTags>
    </S.RestaurantContainer>
  )
}

export default Establishment
