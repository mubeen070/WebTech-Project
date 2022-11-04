import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Filtered from "./filteredData";
const Calculator = () => {
  const [val, setVal] = useState("");

  const clearBack = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };

  const Calculate = () => {
    try {
      setVal("Answer:\t" + eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  return (
    <>
      <div>
        <div className="container my-2 bg-dark text-white">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 text-center text-white fw-bolder">
                Compute Any Thing!
              </h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center border-light">
            <div className="col-md-5 col-lg-4">
              <div class="card md-4 pt-5 bg-dark border-light rounded-10">
                <div class="card-body text-primary bg-dark">
                  <input
                    className="form-control form-control-lg mb-4 text-center bg-dark fs-4 text-white shadow"
                    type="text"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    placeholder="Enter numerical value here!"
                  />
                  <div className="row bg-dark">
                    <div className="col-3">
                      <button
                        class="btn btn-dark text-white  p-4 fs-4"
                        value="1"
                        onClick={(e) => setVal((val) => val + e.target.value)}
                      >
                        1
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        class="btn btn-dark text-white  p-4 fs-4"
                        value="2"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        2
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="3"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        3
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="C"
                        onClick={() => clearBack()}
                      >
                        C
                      </button>
                    </div>
                  </div>
                  <div className="row bg-dark">
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="4"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        4
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="5"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        5
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="6"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        6
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  py-4 fs-5"
                        value="+"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="row bg-dark">
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="7"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        7
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="8"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        8
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="9"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        9
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  py-4 fs-5"
                        value="*"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        *
                      </button>
                    </div>
                  </div>
                  <div className="row bg-dark">
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="="
                        onClick={() => Calculate()}
                      >
                        =
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="0"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        0
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  p-4 fs-4"
                        value="/"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        /
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        className="btn btn-dark text-white  py-4 fs-5"
                        value="-"
                        onClick={(e) => setVal(val + e.target.value)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ padding: 50 }}
          >
            <button className="btn btn-dark">
              <Link to="/employ">Show Employee Data!</Link>
            </button>
          </div>
          <div className="row">
            <div className="col-4">
              <input
                className="form-control form-control-lg mb-4 text-center bg-dark fs-4 text-white shadow"
                type="text"
                placeholder="Enter employe ID!"
              />
            </div>
            <div className="col-4">
              <input
                className="form-control form-control-lg mb-4 text-center bg-dark fs-4 text-white shadow"
                type="text"
                placeholder="Enter Profit!"
              />
            </div>
            <div className="col-4">
              <input
                className="form-control form-control-lg mb-4 text-center bg-dark fs-4 text-white shadow"
                type="text"
                placeholder="Enter Loss!"
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center" style={{padding:30}}>
            <button className="btn btn-primary">
                Submit
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Calculator;
