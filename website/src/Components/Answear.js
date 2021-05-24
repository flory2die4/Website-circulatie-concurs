import Answear from './Answears'

const Answears = ({ answears }) => {
	return (
		<div className='answears'>
			{ answears.map((answear, index) => (
				<Answear 
					key={index}
					color='#E33E57'
					answear={answear}
				/>
			)) }
		</div>
	)
}

export default Answears