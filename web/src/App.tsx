import './styles/global.css'
import { Habit } from './components/Habits'

function App() {
  return (
    <div>
      <Habit completed={25} />
      <Habit completed={50} />
      <Habit completed={75} />
      <Habit completed={100} />
    </div>
  )
}

export default App
