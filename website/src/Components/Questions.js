import Question from './Question'

const Questions = ({ questions }) => {
	return (
		<div className='questions'>
			{ questions.map((question, index) => (
				<Question 
					key={index}
					color='#E33E57'
					question={question.question}
				/>
			)) }
		</div>
	)
}

export default Questions