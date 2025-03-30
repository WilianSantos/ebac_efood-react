import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyle from './styles'
import ProjectRoutes from './routes'

import store from './store'
import Checkout from './components/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ProjectRoutes />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
