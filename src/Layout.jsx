import { Routes, Route } from "react-router-dom";
import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import QrCodeScanner from "./components/Scanner/QrCodeScanner";
import Navigation from "./components/Navigation/Navigation";
import GenerateHistory from "./GenerateHistory";
import ScanHistory from "./ScanHistory";

const Layout = () => {
    return (
        <div>
            < Navigation />
            {/* < QrCodeGenerator /> */}
            {/* < QrCodeScanner /> */}

            <Routes>
                <Route path="/generate" element={< QrCodeGenerator />}/>
                <Route path="/scan" element={< QrCodeScanner />}/>
                <Route path="/generateHistory" element={< GenerateHistory />}/>
                <Route path="/scanHistory" element={< ScanHistory />}/>
            </Routes>
        </div>  
    );
}

export default Layout;