import './App.css'
import { RecoilRoot } from 'recoil'
import ComponentOne from './Components/Component One'
import ComponentTwo from './Components/Component Two'
function App() {
    return (
    <RecoilRoot>
        <ComponentOne />
        <ComponentTwo />
    </RecoilRoot>
  )
}

export default App
