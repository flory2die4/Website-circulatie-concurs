import { useState } from 'react'

const RadioButton = ({insideColor, borderColor, width, done}) => {
    const [checked, setChecked] = useState(done);

    return (
        <span
            onClick={() => setChecked(!checked)}
            style ={{
                borderRadius: '50%',
                cursor: 'pointer',
                marginLeft: '5px',
                border: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: `${width}vw`,
                height: `${width}vw`,
                borderStyle: 'solid',
                borderColor: borderColor,
                backgroundColor: insideColor,
            }}
        >

            {checked && <span className='radio'
                style={{
                    
                    borderRadius: '50%',
                    border: 'none',
                    width: `${width / 5}vw`,
                    height: `${width / 5}vw`,
                    display: 'inline',
                    borderColor: borderColor,
                    borderStyle: 'solid',
                    backgroundColor: borderColor,   
                }}
            >
            </span> }
        </span>
    )
}

export default RadioButton