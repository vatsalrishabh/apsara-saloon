import React from "react";
import LeftLaptoSideNav from "../LeftLaptoSideNav";
// import MobileAdminNav from "../MobileAdminNav";
import RightMembersHistory from "./RightMembersHistory";



const page = () => {
  return (
    <div>
      <div>
        {/* <MobileAdminNav /> */}
      </div>

      <div className="flex">
        <LeftLaptoSideNav />{" "}{/* left side admin panel which changes right side component */}
<RightMembersHistory/>

      </div>
    </div>
  );
};

export default page;
