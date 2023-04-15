import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        Qual é
      </div>
    </ThemeProvider>
  )
}
export default App
