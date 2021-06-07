const PlayButton = ({add}) => {
    return (
        <div className='play-button'>
            <div className='play-button-circle'>
                {add ? 
                    <div className='plus'>
                        <div className="plus-first-line"></div>
                        <div className="plus-second-line"></div>
                    </div>
                    :
                    <div className='play-button-triangle' /> 
                }
            </div>
        </div>
    )
}

export default PlayButton;