import AppLayout from './components/layout/AppLayout';
import { CriptoContextProvider } from './context/crypto-context';



export default function App() {
  return (
    <CriptoContextProvider>
      <AppLayout />
    </CriptoContextProvider>
  )
}
