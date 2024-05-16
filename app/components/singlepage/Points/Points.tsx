import React from 'react'
import "./Points.css"
function Points() {
  return (
    <div className="points">
      <div className='interior'>
        <h2>Use of Interior</h2>
      <ol>
        <li><span>1</span>We provide high-quality design services.</li>
        <li><span>2</span>Projects are delivered on time with the latest designs.</li>
        <li><span>3</span>We utilize scientific skills for achieving better results.</li>
    <li><span>4</span>Renovations are included as a benefit of our service.</li>
    <li><span>5</span>We are confident about our projects.</li>
  </ol>
      </div>
      <div className='point'></div>
      <div className='art'>
      <h2>Make An Art</h2>
      <ol>
    <li><span>1</span>We provide high-quality design services.</li>
    <li><span>2</span>Projects are delivered on time with the latest designs.</li>
    <li><span>3</span>Scientific skills are utilized to achieve better results.</li>
    <li><span>4</span>Renovations are included as a benefit of our service.</li>
    <li><span>5</span>We are confident about our projects.</li>
  </ol>
      </div>
    </div>
  )
}

export default Points
