import { useState } from 'react'
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
    )
}
export default AddQuizz;