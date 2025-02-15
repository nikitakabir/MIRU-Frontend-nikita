import './topbar.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

function Topbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className='topbar-container'>
        <a href="/" className="brand-name">
            MIRU
        </a>
      <button className="hamburger" onClick={() =>{
        setIsNavExpanded(!isNavExpanded)
      }}>
        <AiOutlineMenu className="hamburger-icon"/>
      </button>
      <div
        className= {isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/itinerary">Itinerary</a>
          </li>
          <li>
            <a href="/currencyexchange">Currency Converter</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Topbar