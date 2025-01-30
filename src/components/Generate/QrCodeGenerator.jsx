import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';
import style from './qrCodeGenerator.module.css'

const QrCodeGenerator = () => {
    const [value, setValue] = useState(' ')
    const [result, setResult] = useState('')
    const Taxa = 'Gerda'
    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value])
        )
        setResult(value) 
        setValue('')
    }
    const onChangeHandler = (event) => {
        setValue(event.target.value)   
        setResult('') 
    }
    return (  
        <div className={style.wrapper}>
            <div className={style.qrwrap}>
                {result !== '' && (<QRCodeSVG value={result} size={200}/>)}
                <p className={style.text}>{result}</p>
            </div>
            <form className={style.form}>
                <input placeholder='Enter text...' className={style.input} type="text" value={value} onChange={onChangeHandler}/>
                <button 
                    className={style.btn}
                    type='button' 
                    onClick={onClickHandler}
                >
                    Generate QR
                </button>
            </form>
        </div>
    );
}

export default QrCodeGenerator;