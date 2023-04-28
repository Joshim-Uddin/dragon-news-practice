import React from "react";
import Qzone1 from "../../assets/qZone1.png";
import Qzone2 from "../../assets/qZone2.png";
import Qzone3 from "../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-light mt-3 text-center py-3 d-flex flex-column gap-2">
      <h5>Q-Zone</h5>
      <img src={Qzone1} alt="" />
      <img src={Qzone2} alt="" />
      <img src={Qzone3} alt="" />
    </div>
  );
};

export default Qzone;
