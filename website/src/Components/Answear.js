import Answear from './Answears'

const Answears = ({ answears, verifyAnswear }) => {
	return (
		<div className='answears'>
			{ answears.map((answear, index) => (
				<Answear 
					key={index}
					color='#E33E57'
					verifyAnswear={verifyAnswear}
					answear={answear}
				/>
			)) }
		</div>
	)
}

export default Answears