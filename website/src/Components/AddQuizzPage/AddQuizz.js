import { useState } from 'react'
<<<<<<< HEAD
import { useHistory } from 'react-router-dom'

const AddQuizz = ({ title }) => {
    const history = useHistory()
    return (
        <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
            <button className="add-question" onClick={() => history.push('/add-question')}>Adauga o intrebare</button>
            <button className="inapoi">Inapoi</button>
            <button className="creaza">Creaza</button>
        </div>
=======

const AddQuizz = ({ title }) => {

    return (
        <form>
            <h3 style={{textAlign: 'center'}}>{title}</h3>
            <div className='form-control'>
                <label htmlFor='' />
                <input 

                />
            </div>
            <div className='form-control'>
                <label htmlFor='' />
                <input 
                />
            </div>
        </form>
>>>>>>> e904b0ad8ce52b782091d94f1a2e9beb07e2e71d
    )
}
export default AddQuizz;