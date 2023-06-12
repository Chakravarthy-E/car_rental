import Nav from "./Nav";
import car_data from "./car_data";
import "./styles/helloadmin.css";
import { useNavigate } from "react-router-dom";

function HelloAdmin() {
  const navigate = useNavigate();
  const addCar = () => {
    navigate("/addcar");
  };

  return (
    <div>
      <Nav />
      <div style={{ marginBottom: "20px", marginLeft: "30px" }}>
        <p className="text-dark"></p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "30px",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Hello Admin</h2>
          <button id="a-adminpage-butt" className="rounded" onClick={addCar}>
            Add Cars
          </button>
        </div>
      </div>
      <div id="container" style={{ margin: "30px" }}>
        {car_data.map((value) => (
          <div id="card">
            {console.log(value)}
            <div id="img">
              <img
                src={value.image}
                style={{ width: "280px", margin: "5px" }}
              />
            </div>
            <div id="details">
              <p className="text-dark">{value.Person} Person</p>
              <span>{value.car_type}</span>
              <span>{value.Price} Rs/KM</span>

              <hr style={{ color: "#7C7C7C" }} />

              <div style={{ marginTop: "20px" }}>
                <span>Available date</span>
                <span>{value.Date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HelloAdmin;
