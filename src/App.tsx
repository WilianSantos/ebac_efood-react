import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyle from './styles'
import ProjectRoutes from './routes'

import store from './store'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ProjectRoutes />
        <Sidebar />
      </BrowserRouter>
    </Provider>
  )
}

export default App
