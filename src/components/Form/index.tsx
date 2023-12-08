import { Formik , Form, Field, ErrorMessage} from "formik"
import { FormData } from "../../interfaces/formData"
import { GET_FILMS } from "../../graphql/queries"
import { useQuery, gql } from "@apollo/client"

const query = gql(GET_FILMS)
const initialValues = {
  firstName: "",
  lastName: "",
  favoriteMovie: ""
}



export default function FormMovies() {
  const { data, loading, error } = useQuery(query)

  if (error) return <p>Error :(</p>

  return (
    <section className='form-section'>
      <h1>My form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validate={(values) => {
          const errors: FormData = {} as FormData
          if (!values.firstName) {
            errors.firstName = "You need to enter a first name."
          }
          if (!values.lastName) {
            errors.lastName = "You need to enter a last name."
          }
          if (!values.favoriteMovie) {
            values.favoriteMovie = data.allFilms.films[0].title
          }

          return errors
        }}
      >
        {({ values,  errors, handleBlur}) => (
            <>
            <section className="error-section" >
                <ErrorMessage name="firstName" component="span" className="error-message"/>
                <ErrorMessage name="lastName" component="span"  className="error-message"/>
            </section>
                  <Form >
                          <section className='form'>
                              <div className='form-field--fullname'>
                                  <div className='form-field'>
                                      <label className="form-label" htmlFor='first-name'>First name</label>
                                      <Field
                                          name='firstName'
                                          type='text'
                                          id='first-name'
                                          className={errors.firstName ? "error-input" : ""}
                                          onBlur={handleBlur}
                                          value={values.firstName} 
                                          />
                                  </div>
                                  <div className='form-field'>
                                      <label className="form-label" htmlFor='last-name'>Last name</label>
                                      <Field
                                          name='lastName'
                                          type='text'
                                          id='last-name'
                                          className={errors.firstName ? "error-input" : ""}
                                          onBlur={handleBlur}
                                          value={values.lastName}
                                          />
                                  </div>
                              </div>
                              <div className='form-field'>
                                  <label htmlFor='favorite'>Favorite Star Wars movies</label>
                                  <Field as ='select' 
                                  name='favoriteMovie' 
                                   >
                                      {loading ? (
                                          <option>Loading...</option>
                                      ) : (
                                          data.allFilms.films.map(
                                              (movie: { title: string} , i: number) => (
                                                  <option key={i} value={movie.title}>
                                                      {movie.title}
                                                  </option>
                                              )
                                          )
                                      )}
                                    </Field>
                              </div>
                              <button type='submit'>Submit</button>
                          </section>
                      </Form></>
        )}
      </Formik>
    </section>
  )
}
