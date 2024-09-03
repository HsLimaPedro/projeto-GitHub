import axios from 'axios'
import { useState } from 'react'
import './App.css'

window.alert('Olá, espero que goste!')

type GITHUBResponse = {
  login: string
  name: string
  avatar_url: string
  location: string
  repos_url: string
}

function App() {

  const [search, setSearch] = useState('')
  const [name, setName] = useState('Aguardando busca...')
  const [avatarURL, setAvatarURL] = useState('')
  const [login, setLogin] = useState('')
  const [location, setLocation] = useState('')
  const [reposURL, setReposURL] = useState('')
  


  const handleSearch = () => {
    axios.get<GITHUBResponse>(`https://api.github.com/users/${search}`).then((res) => {
      setName(res.data.name)
      setAvatarURL(res.data.avatar_url)
      setLogin(res.data.login)
      setLocation(res.data.location)
      setReposURL(res.data.repos_url)
    })

  }

  return (
    <div className="container-app">
      <div className="container">
        <header className='header-top'>
          <ul>
            <li> Clicksoft</li>
          </ul>
        </header>

        <main>
          <div className="form">
            <h1>Buscador de perfis do GitHub</h1>
            <input type="text" placeholder="Digite um usuário"
              onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>pesquisar</button>
          </div>
          <div className="content">
            <div>
              <img src={avatarURL} alt="Perfil" />
              <h1>{name}</h1>
              <p>{login}</p>
              <p>{location}</p>
              <p>{reposURL}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )


}

export default App