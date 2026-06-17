import { Link } from 'react-router-dom'
import '../styles/Howitworks.css'
import howitwork from '../assets/howitworks.png'


function Howitworks() {
  return (
    <div className='how-container'>
      <div className='how-heading'>
        <h1>How it works</h1>
        <p>A single 4-step process to make a big impact</p>
        <div className='how-it-works'>
        <img src={howitwork} alt='processimage'/>
        </div>
        <div className='howit-button-container'>
           <Link className='howit-works-button' to="/">Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default Howitworks
