import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import ProjectRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ProjectRoutes />
    </BrowserRouter>
  )
}

export default App
