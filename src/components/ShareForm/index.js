import React from 'react'
import useForm from './useForm'
import validate from './FormValidationRules'
import Recaptcha from 'react-google-recaptcha'

const ShareForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(post, validate)

  function post () {
    console.log('No errors, submit callback called!')
  }

  const handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  return (
    <div className='section'>
      <div className='container'>
        <div className='column is-4'>
          <div className='box'>
            <form
              name='contact'
              method='post'
              action='/contact/success'
              encType='application/x-www-form-urlencoded'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              data-netlify-recaptcha='true'
              onSubmit={handleSubmit}
              noValidate
            >
              <input type='hidden' name='form-name' value='email' />
              <div hidden>
                <label>
                  Don not fill this out:{' '}
                  <input name='bot-field' onChange={handleChange} />
                </label>
              </div>
              <div className='field'>
                <label className='label'>Full Name</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='Full Name' name='name' id='name' onChange={handleChange} value={values.name} required />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input autoComplete='off' className={`input ${errors.email && 'is-danger'}`} type='email' name='email' onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className='help is-danger'>{errors.email}</p>
                  )}
                </div>
              </div>

              <div className='field'>
                <label className='label'>Message</label>
                <div className='control'>
                  <textarea className='textarea' name='message' rows='5' id='message' onChange={handleChange} value={values.message} required />
                </div>
              </div>
              <div className='field'>
                <Recaptcha
                  ref='recaptcha'
                  sitekey='6Le3cZMUAAAAAEAXmN6cDoJGVUVZ0RzuJlLAj6a-'
                  theme='dark'
                  render='explicit'
                  onloadCallback='Done'
                  onChange={handleRecaptcha}
                />
              </div>
              <div className='field is-grouped is-pulled-right'>
                <div className='control'>
                  <button className='button is-text' type='reset'>Cancel</button>
                </div>
                <div className='control'>
                  <button className='button is-primary' type='submit' disabled={(!this.state.name) || (!this.state.email) || (!this.state.message)}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareForm
