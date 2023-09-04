import React from 'react'

export default function 
() {
  return (
    <div>
    <div className="card mt-3">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">this is Text</p>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success round">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={(i = 1)} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100  bg-success round">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <div className=" h100 fs-4">Total Price</div>
        </div>
      </div>
    </div>
  </div>
  )
}
