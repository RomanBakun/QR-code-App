import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "./constants";
import style from './history.module.css';

const ScanHistory = () => {
    // const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    const data = ['taxa', 'gerda', 'lorem', 'ipsum']
    return ( 
        <div className={style.card}>
            {data.map((text) => (
                    <div className={style.card__item} key={text}>
                        <p>{text}</p>
                        <QRCodeSVG value={text} size={100}/>
                    </div>
                )
            )}
        </div>
    );
}
export default ScanHistory;