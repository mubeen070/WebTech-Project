import "./dealer.css";
import Footer from "./footer";
const DealerInfo = () => {
  return (
    <>
    <div className="main pt-4">
      <div className="about-section">
        <h1 className="text-align-center">About Us</h1>
        <p>Constructease, As we create ease for construction!</p>
        <p>
        410 Terry Ave N, Seattle 98109, WA. Get directions to Constructease Headquarters from Bing: 410 Terry Ave N, Seattle, WA.
        </p>
      </div>

      <h2>Our Team</h2>
      <div className="container2 ms-2">
        <div className="card text-center bg-dark">
          <div className="card-header text-light">#1</div>
          <div className="card-body">
            <h5 className="card-title text-light fs-2">Jack Hifen</h5>
            <img class="img" src="/pass1.png" alt="Card image cap" />
            <p className="card-text">Head Analyst</p>
            <p className="card-text">jack@noreply.com</p>
          </div>
        </div>

        <div className="card text-center bg-dark">
          <div className="card-header text-light">#2</div>
          <div className="card-body">
            <h5 className="card-title text-light fs-2">Phill Paul</h5>
            <img class="img" src="/pass2.png" alt="Card image cap" />
            <p className="card-text">Head Admin</p>
            <p className="card-text">phillk@noreply.com</p>
          </div>
        </div>

        <div className="card text-center bg-dark">
          <div className="card-header text-light">#3</div>
          <div className="card-body">
            <h5 className="card-title text-light fs-2">Annie</h5>
            <img class="img" src="/pass3.png" alt="Card image cap" />
            <p className="card-text">Senior Helper</p>
            <p className="card-text">Annie@noreply.com</p>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default DealerInfo;
