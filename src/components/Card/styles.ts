import styled from 'styled-components'
import { colors } from '../../styles'
import { RestaurantDescription } from '../Establishment/styles'

export const CardImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`
export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
`

export const CardDescription = styled(RestaurantDescription)`
  margin: 8px 0;
  color: ${colors.white};
`

export const CardClose = styled.img`
  height: 16px;
  width: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  z-index: 1;
`

export const CardContainer = styled.div`
  padding: 8px;
  background-color: ${colors.primary};
  color: ${colors.white};
  cursor: pointer;
`

export const Modal = styled(CardContainer)`
  transition: 0.3s;

  &.card-action {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 344px;
    padding: 32px;
    display: flex;
    z-index: 1;

    align-items: flex-start;
    transition: 0.3s;

    ${CardImage} {
      height: 280px;
      width: 280px;
      margin-right: 24px;
    }

    ${CardTitle} {
      font-size: 18px;
    }

    ${CardDescription} {
      margin: 16px 0;
      height: 176px;
    }
`
