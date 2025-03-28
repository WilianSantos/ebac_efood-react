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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.8;
`

export default GlobalStyle
