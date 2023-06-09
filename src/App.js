import './App.css'
import Cards from './components/Cards/Cards'
import SearchBar from './components//SearchBar/SearchBar'
import characters from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>        
      <div>
        <Cards characters={characters} />
      </div>
      <hr />
  </div>
  )
}

export default App
