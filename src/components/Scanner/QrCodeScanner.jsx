import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import style from './qrCodeScanner.module.css';
import {SCAN_DATA} from '../../constants' 

const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null)
    const scanHandler = (result) => {
        setScanned(result[0].rawValue);
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue]))
    }
    
    return (  
        <div className={style.scanner}>
            <p className={style.text}>Show QR-code</p>
            <div className={style.window}>
                <Scanner 
                    components={{
                        audio: false,
                        finder: false
                    }}
                    allowMultiple 
                    onScan={scanHandler} 
                    styles={{container: { width: 300, height: 300}}}
                />
            </div>
            <div className={style.title}>
                <p>QR-scann: {scanned}</p>
            </div>
        </div>
    );
}

export default QrCodeScanner;