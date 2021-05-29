import { useHistory } from 'react-router-dom'
import PlayButton from './PlayButton';

const Quizz = ({ name, color, add }) => {
    const history =  useHistory();
    return (
        <div 
            onClick={() => history.push(`${add ? 'add-quizz' : 'quizz'}`)}
            style={{
                backgroundColor: color,
            }}
            className='quizz'
        >
            <p style={{
                fontSize: '1rem',
                margin: '.3rem'
            }}
            >{ name }</p>
            <div style={{
                position: 'absolute',
                top: '25%',
                width: '100%',
                height: '.5rem',
                backgroundColor: '#212128',
            }} /> 
            <PlayButton add={add} />   
        </div>
    )
}

export default Quizz
