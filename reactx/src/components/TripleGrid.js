import React from "react";
import "./TripleGrid.css";

export default function TripleGrid() {
  return (
    <>
      <div className="triple-grid-container">
        <div className="triple-grid-item">
          <div className="triple-grid-item-content-one">
            <h3 className="triple-grid-heading">News & Events</h3>
            <p className="triple-grid-content">
              Find out about the latest NEWS and EVENTS including COMMUNITY
              EDUCATION SEMINARS available for viewing free online.
            </p>
            <button className="triple-grid-button">
              <strong>View all</strong>
            </button>
          </div>
          <div className="triple-grid-item-content-two">
            <h3 className="triple-grid-heading">Join our Volunteers</h3>
            <p className="triple-grid-content">
              We are always looking for new recruits to join our volunteer
              service. You might be interested in becoming a companion, driver
              or activities volunteer.
            </p>
            <button className="triple-grid-button">
              <strong>Learn more</strong>
            </button>
          </div>
          <div className="triple-grid-item-content-three">
            <h3 className="triple-grid-heading">How we can help</h3>
            <p className="triple-grid-content">
              Our services are accessible to anyone in Canterbury with a
              dementia diagnosis, including their family/ whanau and
              care-partner.
            </p>
            <button className="triple-grid-button">
              <strong>Read more</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
