import "./home.css";
import BackgroundSlider from "./bgSlider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <BackgroundSlider />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-items-center">
              <div className="card text-center bg-primary">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <img class="card-img" src="/matIcon.png" alt="Card image cap"/>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="/material" className="btn btn-dark">
                    Check Material
                  </Link>
                </div>
                <div className="card-footer">2 days ago</div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center bg-primary">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <img class="card-img" src="/equip.png" alt="Card image cap"/>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="/equipment" className="btn btn-dark">
                   Check Equipment
                  </Link>
                </div>
                <div className="card-footer">2 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
