
import { Link } from "react-router-dom";

const Navigation = () => {
    return (  
        <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px'}}>
            <Link style={{textDecoration: 'none', color: 'white'}} to='./generate'>Generate QR-code</Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/scan'>Scanning QR-code</Link>
            <Link style={{textDecoration: 'none', color: 'gray'}} to='/generateHistory'>The history of generation</Link>
            <Link style={{textDecoration: 'none', color: 'gray'}} to='/scanHistory'>The history of scanning</Link>
        </nav>
    );
}

export default Navigation;