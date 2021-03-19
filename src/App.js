import './App.css'
import Counter from './Components/Counter'
import Employee from './Components/Employee'
import Login from './Components/Login'

const employees = [
  {
    id: 1,
    firstName: 'Brad',
    lastName: 'Thompson',
    age: 30
  },
  {
    id: 2,
    firstName: 'Michael',
    lastName: 'Philips',
    age: 32
  },
  {
    id: 3,
    firstName: 'Consuela',
    lastName: 'Hernández',
    age: 23
  },
  {
    id: 4,
    firstName: 'Tyler',
    lastName: 'Potts',
    age: 24
  }
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <h1>Company Directory</h1>
        {
          employees.map(employee => {
            return <Employee key={employee.id} {...employee} />
          })
        }
      </header>
      <h1>Welcome to the counter!</h1>
      <Counter />
    </div>
  )
}

export default App