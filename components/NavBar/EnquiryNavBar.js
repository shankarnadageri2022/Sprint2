import React from "react";

function EnquiryNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a style={{fontFamily:"cursive",paddingRight:"50px"}} className="navbar-brand" href="/home">
          eVMS
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/enquiry">
              Enquiry
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/enquiryresponse">
              CheckResponse
            </a>
          </li>


            

        </ul>
      </nav>
    </div>
  );
}

export default EnquiryNavBar;
