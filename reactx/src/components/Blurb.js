import React from "react";
import "./Blurb.css";

export default function Blurb() {
  return (
    <>
      <div className="blurb-container">
        <div className="blurb-item">
          <div className="blurb-main">
            <h1 className="blurb-main-title"> Dementia Canterbury</h1>
            <p className="blurb-main-content">
              Research shows that the 'treatment' of dementia should be one of
              'care rather than cure', with person-centred, purposeful,
              stimulating experiences and activities that offer hope and means
              to maximise quality of life. Dementia Canterbury provides free
              person-centered services for people diagnosed with a dementia and
              their families.
            </p>
            <p className="blurb-main-content">
              Our aim is to support people to continue to lead fulfilling lives
              after a dementia-diagnosis, to raise community awareness and break
              down barriers associated with all dementias and work towards a
              dementia-friendly and responsive community, one where people
              living with dementia feel safe and confident to participate in
              activities in the community.
            </p>
          </div>
          <div className="blurb-mini">
            <p className="blurb-mini-content">
              <strong>
                Dementia Canterbury area includes: West Coast/Buller, Kaikoura,
                Ashburton & North Canterbury regions.
              </strong>
            </p>
          </div>
        </div>
        <a>
          <div className="blurb-image">
            <img
              className="blurb-image-content"
              src={require("../images/mapcanterbury.jpeg")}
              alt="map"
            />
          </div>
        </a>
      </div>
    </>
  );
}
