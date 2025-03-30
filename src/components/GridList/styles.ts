import styled from 'styled-components'
import { GridListProps } from '.'
import { breakpoints } from '../../styles'

export const GridListContainer = styled.section<
  Omit<GridListProps, 'foods' | 'restaurants' | 'isRestaurant'>
>`
  display: grid;
  grid-template-columns: repeat(${({ columnGrid }) => `${columnGrid}`}, 1fr);
  ${({ columnGrid }) => (columnGrid === 2 ? 'gap: 48px 80px;' : 'gap: 32px;')}
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
