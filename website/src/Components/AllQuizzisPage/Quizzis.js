import Quizz from "./Quizz"

const Quizzis = ({ quizzis }) => {
    const colors = ['#14DBC0', '#F27107', '#EB2138']

    return (
        <div className='quizzis'>
            {quizzis.map((quizz, index) => (
                <Quizz name='haha' add={index === quizzis.length - 1 ? true : false} color={colors[index]} key={index} />
            ))} 
        </div>
    )
}

export default Quizzis
