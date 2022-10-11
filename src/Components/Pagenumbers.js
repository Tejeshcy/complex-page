import React from 'react'

const Pagenumbers= () => {
  return (
    <div>
       <div className="">
            <div className="card mx-5 bottomcontainer">
              <div className="card-body bottomcard ">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="bottomfont"> 27 Jobs posted</p>
                  </div>
                  <div className="col-sm-9 d-flex justify-content-end">
                    <div className=" ">
                      <img
                        className="img-fluid bottomarrow"
                        src="https://cdn-icons-png.flaticon.com/512/2985/2985161.png"
                      ></img>
                    </div>
                    <div>
                      <p className="bottomfont">1</p>
                    </div>
                    <div>
                      <p className="bottomfont">2</p>
                    </div>
                    <div>
                      <p className="bottomfont">3</p>
                    </div>
                    <div>
                      <p className="bottomfont">...</p>
                    </div>
                    <div>
                      <p className="bottomfont">12</p>
                    </div>
                    <div className="">
                      <img
                        className="img-fluid bottomarrow"
                        src="https://cdn-icons-png.flaticon.com/512/2952/2952047.png"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
    </div>
  )
}

export default Pagenumbers;