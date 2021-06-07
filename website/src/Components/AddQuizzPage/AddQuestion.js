import { useState } from 'react'
import RadioButton from './RadioButton'

const AddQuestion = ({title}) => {
	const [question, setQuestion] = useState('')
	const [questionType, setQuestionType] = useState('scrisa')

	return (
		<form>
			<h1 style={{textAlign: 'center'}}>{title}</h1>
			<div className='form-control'>
				<label>intrebare</label>
				<input 
					type='text'
					value={ question }
					onChange={e => setQuestion(e.target.value)}
				/>
			</div>
			<div className='form-control'>
				<label>felul intrebarii</label>
				<div style={{display: 'flex', justifyContent: 'space-around'}}>
					<div className='form-control'>
						<label style={{marginRight: '1rem'}}>variante</label>
						<br />
						<RadioButton 
							insideColor='#212128' 
							borderColor='#E33E57' 
							done={questionType === 'scrisa' ? false : true} 
							width='1' 
						/>
					</div>
					<div className='form-control'>
						<label>scrisa</label>
						<br />
						<RadioButton 
							insideColor='#212128' 
							borderColor='#E33E57' 
							done={questionType === 'scrisa' ? true : false} 
							width='1' 
						/>
					</div>
				</div>
			</div>
		</form>
	)
}

export default AddQuestion;