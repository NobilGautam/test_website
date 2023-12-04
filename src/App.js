import React from 'react'

const App = () => {
  return (
    <section className='form'>
        <form>
            <h3>Name: </h3>
            <input
                placeholder='Enter name'
            >
            </input>
            <h3>dob: </h3>
            <input
                type='date'
            >
            </input>
            <button>submit</button>
        </form>
    </section>
  )
}

export default App