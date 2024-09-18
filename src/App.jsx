import './App.css'
import Cube from './components/Cube'

function App() {

  return (
    <div className='box' >
      <div className="boxes">
      <div className="container1">
        Cochin/
        <br />
        Calicut
        <br />based
        <br />freelancer
      </div>
      <div className="mid">
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <div className="container2">
       <p>Insta</p>
       <p> LinkedIn </p>
      <p>Twitter</p>
        
      </div>
      </div>
        <Cube/>
        <div className="desDiv">
          <p id='id'>001</p>
          <p id='name'>SHamil shiraz //
            <br />fullstack developer
          </p>
        </div>
      <div className="boxes">
        <div className="container3">
        </div>
        <div className="mid2">
          portfolio
      </div>
        <div className="container4">
        </div>
      </div>
    </div>
  )
}

export default App
