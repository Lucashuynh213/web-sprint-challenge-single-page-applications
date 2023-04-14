import "./Homepage.css";
import {useHistory, Link} from "react-router-dom"
import { Fragment } from "react";


function Homepage() {
  const history = useHistory();
  const routeToOrder = (evt) => {
    console.log(evt.currentTarget.id)
    history.push("/pizza")
  }

    return (
      <Fragment>
        <body>
        <div className="container">
          <img
            className="main-image"
            src="https://images6.alphacoders.com/698/698287.jpg"
            alt="order-pizza"
          />
          <Link to="/pizza"><button onClick={routeToOrder} id="order-pizza" className="btn">Pizza?</button></Link>
        </div>
        </body>
      </Fragment>
    )
  };

export default Homepage;