import styled from 'styled-components'
import { colors } from '../../styles'
import { RestaurantDescription } from '../Restaurant/styles'

export const CardContainer = styled.div`
  padding: 8px;
  background-color: ${colors.primary};
  color: ${colors.white};
`

export const CardImage = styled.img`
  width: 100%;
  height: 167px;
`
export const CardName = styled.h3`
  font-size: 16px;
  font-weight: 900;
`

export const CardDescription = styled(RestaurantDescription)`
  margin: 8px 0;
  color: ${colors.white};
`
