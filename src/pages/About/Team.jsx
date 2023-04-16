import React from "react";

import SecHead from "../../components/SecHead";
import TeamCRD from "../../components/TeamCRD";
const Team = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <SecHead
        title="Team"
        desc="  
The trainers at F7 are full-blown rock stars who come from a variety of backgrounds including strength & conditioning, bodybuilding, and boxing. We pride ourselves on having only incredibly high-caliber trainers available at reasonable and affordable rates."
      />
      <div id="the-gym">
        <center>
          <div className="t-title">The Owners</div>
        </center>
        <div id="ownerz">
          <TeamCRD
            dp="./imgs/own1.webp"
            trName="Alvin Summers"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/own2.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
        </div>
        <center className="mt-5">
          <div className="t-title mt-5">The Trainers</div>
        </center>
        <div id="trainerzz">
          {arr.map((f) => {
            return (
              <TeamCRD
                dp={`./imgs/tr${f}.webp`}
                trName="Oscar Williamson"
                trPost="Owner , coach"
              />
            );
          })}
        </div>
        {/* <div id="trainerzz">
          <TeamCRD
            dp="./imgs/tr1.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr2.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr3.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr4.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr5.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr6.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr7.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr8.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Team;
