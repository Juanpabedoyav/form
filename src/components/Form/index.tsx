import { Formik } from "formik"
import { FormData } from "../../interfaces/formData"
import { FormEventHandler } from "react"


const initialValues : FormData= {
    firstName: '',
    lastName: '',
    favoriteMovie: ''
}
export default  function Form  () {



const onSubmit = ()  => {
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
                <option value="new-hope">A New Hope</option>
                <option value="empire">The Empire Strikes Back</option>
                <option value="return">Return of the Jedi</option>
                <option value="phantom">The Phantom Menace</option>
                <option value="attack">Attack of the Clones</option>
                <option value="revenge">Revenge of the Sith</option>
                <option value="force">The Force Awakens</option>
                <option value="last">The Last Jedi</option>
                <option value="rise">The Rise of Skywalker</option>
            </select>
        </div>
        <button>Submit</button>
        </section>
    </form>
    </section>

  )
}
