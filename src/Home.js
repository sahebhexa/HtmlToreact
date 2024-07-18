import './App.css';
import { Body } from './components/Body';
import History from './components/History';
import Iconpanel from './components/Iconpanel';
import Savemodel from './components/Savemodel';
import Sidebar from './components/Sidebar';
import ToggleButton from './components/ToggleButton';
import Topbar from './components/Topbar';
import './css/dark.css'
import './css/light.css'
import './css/ruler.css'
import './css/toastr.css'
// import { initializeHexa } from "./hexa";
import { useEffect } from 'react';

function Home() {



    return (
        <div id="hexa" className='backend'>
            <Topbar />
            <Sidebar />
            <Iconpanel />
            <ToggleButton />
            <Body />
            <Savemodel />
            <History />
        </div>
    );
}

export default Home;
