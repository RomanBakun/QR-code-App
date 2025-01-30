
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "./constants";
import style from './history.module.css';

const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    
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
export default GenerateHistory;