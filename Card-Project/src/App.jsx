import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">        
          <div>
            <div className="top">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="" />
              <button>Save <Bookmark size={12} /></button>
            </div>

            <div className="centre">
              <h3>Amazon <span>5 days ago</span></h3>
              <h2>Senior UI/UX Developer</h2>
              <div className='tag'>
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
              </div>
            </div>
          </div>

            <div className="bottom">
              <div>
                <h3>$120/hr</h3>
                <p>Mumbai,India</p>
              </div>
              <button>Apply Now</button>
            </div>
      </div>
    </div>
  )
}

export default App
