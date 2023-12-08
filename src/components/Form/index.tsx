// import { Formik } from "formik"
// import { FormData } from "../../interfaces/formData"
import { useEffect, useState } from "react"
import {GET_FILMS} from "../../graphql/queries"

// const initialValues : FormData= {
//     firstName: '',
//     lastName: '',
//     favoriteMovie: ''
// }
export default  function Form  () {
const [favoriteMovies, setFavoriteMovies] = useState([])


useEffect(() => {
fetch('https://swapi-graphql.netlify.app/.netlify/functions/index',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({query: GET_FILMS})
}).then(res => res.json()).then(res =>setFavoriteMovies(res.data.allFilms.films))
}, [])



const onSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault()
    console.log('submit')
}

  return (
    <section className="form-section">
        <h1>My form</h1>
    <form onSubmit={onSubmit} >
        <section className="form">
        <div className="form-field--fullname">
            <div className="form-field">
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" />
            </div>
            <div className="form-field">
            <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" />
            </div>
        </div>

        <div className="form-field">
            <label htmlFor="favorite">Favorite Star Wars movies</label>
            <select>
                {
                favoriteMovies.map((movie: { title: string }, i: number) => (
                    <option key={i} value={movie.title}>{movie.title}</option>
                ))
            }
            </select>
        </div>
        <button>Submit</button>
        </section>
    </form>
    </section>

  )
}
