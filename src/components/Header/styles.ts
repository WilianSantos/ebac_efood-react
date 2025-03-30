import styled from 'styled-components'
import bgImage from '../../assets/images/vector.png'
import { breakpoints, colors, Container } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 60px 0;
  background-image: url(${bgImage});

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 900;
    color: ${colors.primary};

    span {
      cursor: pointer;
    }

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`
