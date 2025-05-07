
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesList from './routes/RoutesList';
import { BrowserRouter } from 'react-router';
import { LanguageProvider } from './context/langcontext';

function App() {

  return (
    <LanguageProvider>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
