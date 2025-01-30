
import { createRoot } from 'react-dom/client'
// import style from './qrCodeGenerator.module.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import QrCodeGenerator from "./QrCodeGenerator";
// import QrCodeScanner from "./QrCodeScanner";
// import Navigation from './Navigation';
import Layout from './Layout';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: < Navigation />
//   },
//   {
//     path: '/generate',
//     element: < QrCodeGenerator />
//   },
//   {
//     path: '/scan',
//     element: < QrCodeScanner />
//   }
// ])

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    < Layout />
  </BrowserRouter>
)
