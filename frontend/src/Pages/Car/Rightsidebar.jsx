import React from "react";
import style from "../../Styles/car/Right.module.css";
import { TiTickOutline } from "react-icons/ti";
import { BiAlarm } from "react-icons/bi";
import Carbox from "./Carbox";
const Rightsidebar = () => {
  return (
    <div className={style.rightsidecontainer}>
      <div className={style.textbox}>
        <div className={style.symboltick}>
          <div
            style={{
              height: "35px",
              width: "100%",
              alignItems: "center",
              marginTop: "7px",
              marginLeft: "5px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                borderRadius: "12.5px",
                border: "1px solid green",
                height: "25px",
                width: "25px",
                alignItems: "center",
                marginTop: "5px",
                marginLeft: "2px",
                textAlign: "center",
                backgroundColor: "green",
              }}
            >
              <h1 style={{ fontSize: "22px", width: "70%" }}>
                <TiTickOutline style={{ color: "white" }} />
              </h1>
            </div>
            <h1 style={{ color: "green", fontSize: "18px" }}>
              Flexible cancellation with every booking.
            </h1>
          </div>
        </div>
      </div>

      <div className={style.alaram}>
        <div className={style.symboltick}>
          <div
            style={{
              height: "35px",
              width: "100%",
              alignItems: "center",
              marginTop: "7px",
              marginLeft: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                borderRadius: "12.5px",

                height: "30px",
                width: "30px",
                alignItems: "center",
                marginTop: "5px",
                marginLeft: "2px",
                textAlign: "center",
                color: "#D64F06",
              }}
            >
              <h1 style={{ fontSize: "25px", width: "70%" }}>
                <BiAlarm style={{ color: "#D64F06" }} />
              </h1>
            </div>
            <h1 style={{ color: "#D64F06", fontSize: "18px" }}>
              Prices are rising, book now to lock in the price.
            </h1>
          </div>
        </div>
      </div>
{/* box ending */}


<div className={style.carbox}>
<Carbox/>
</div>












    </div>
  );
};

export default Rightsidebar;
