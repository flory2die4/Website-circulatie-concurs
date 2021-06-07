const Answear = ({ answear, color, verifyAnswear }) => {
	return (
		<div 
			className='answear'
			onClick={() => {
				verifyAnswear(answear)
			}}
		>
			<p className='text-raspuns'>{ answear }</p>
		</div>
	)
}


export default Answear;