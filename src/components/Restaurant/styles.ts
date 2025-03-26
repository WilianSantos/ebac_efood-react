import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const RestaurantImage = styled.img`
  height: 217px;
  width: 100%;
  object-fit: cover;
`

export const RestaurantInfos = styled.div`
  padding: 8px;
  color: ${colors.primary};
  border-bottom: 1px solid ${colors.primary};
  border-right: 1px solid ${colors.primary};
  border-left: 1px solid ${colors.primary};
  border-top: 0px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      justify-content: space-between;
      width: 50px;
    }
  }

  .fa-star {
    color: #ffff00;
  }
`

export const RestaurantName = styled.h2`
  font-size: 18px;
  font-weight: 700;
`

export const RestaurantDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
`
// TODO: Centralizar as tags
export const RestaurantTags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`
