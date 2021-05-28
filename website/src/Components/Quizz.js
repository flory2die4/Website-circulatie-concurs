import { useHistory } from 'react-router-dom'
import PlayButton from './PlayButton';

const Quizz = ({ name, color }) => {
    const history =  useHistory();
    return (
        <div 
            onClick={() => history.push('/quizz')}
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
            <PlayButton />   
        </div>
    )
}

export default Quizz
