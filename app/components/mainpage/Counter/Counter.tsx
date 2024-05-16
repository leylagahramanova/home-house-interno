import React from 'react'
import './Counter.css'
function Counter() {
    return (
        <div className="counts">
            <div className="counter">
                <h4>12</h4>
                <p>Years Of Experiance</p>
            </div>
            <div className="vl"></div>
            <div className="counter">
                <h4>85</h4>
                <p>Success Project</p>
            </div>
            <div className="vl"></div>
            <div className="counter">
                <h4>15</h4>
                <p>Active Project</p>
            </div>
            <div className="vl"></div>
            <div className="counter">
                <h4>95</h4>
                <p>Happy Customers</p>
            </div>
            <div className="vl"></div>
        </div>
    )
}

export default Counter