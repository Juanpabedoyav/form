import { Formik } from "formik"
// import { FormData } from "../../interfaces/formData"
import {GET_FILMS} from "../../graphql/queries"
import { useQuery, gql } from "@apollo/client"

const query = gql(GET_FILMS)
// const initialValues : FormData= {
//     firstName: '',
//     lastName: '',
//     favoriteMovie: ''
// }
export default  function Form  () {

const {data, loading, error} = useQuery(query)
if (error) return <p>Error :(</p>

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
                loading ? <option>Loading...</option> 
                :
                data.allFilms.films.map((movie: { title: string }, i: number) => (
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
