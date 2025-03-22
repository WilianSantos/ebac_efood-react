import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  white: '#FFFFFF',
  backgroundLight: '#FFF8F2',
  backgroundDark: '#FFEBD9'
}

const GlobalStyle = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
}
body {
    background-color: ${colors.backgroundLight};
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export default GlobalStyle
