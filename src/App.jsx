import React  from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './Pages/Home/Homepage'
import MovieList from './components/movieList/MovieList'
import Movie from './Pages/movieDetail/Movie'

function App() {
 
  return (
    <>
     <Router>
     <Header />
       <Routes>
       <Route index element={<Homepage />}></Route>
        <Route path='movie/:id' element={<Movie />}></Route>
        <Route path='movie/:type' element={<MovieList />}></Route>
        <Route path='/*' element={<h1>Error Page</h1>}></Route>
       </Routes>
     </Router>
    </>
  )
}

export default App
