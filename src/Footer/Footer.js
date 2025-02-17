import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";

class Footer extends React.Component {
  cardClick = (name) => {
    console.log("in side onclick");
    this.props.Module(name);
  };

  render() {
    return (
      <MDBFooter
        className=""
        style={{ backgroundColor: "#caced1",margin:"20px 0px" }}
      >
        <MDBContainer className="">
          <section className="sec" style={{borderBottom:"2px solid black"}}>
            <MDBRow id="rowfooter">
              <MDBCol
                lg="2"
                md="12"
                className="modcol"
                onClick={() => {
                  this.cardClick("Al Bayt Stadium");
                }}
              >
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://www.qatar2022.qa/sites/default/files/styles/1440x815/public/2022-08/Al-Bayt-Stadium.jpg?h=aa3f82a2&itok=mIBqOXcB"
                    alt="Avatar"
                    className="image"
                  />

                  <div className="text"> Al Bayt Stadium</div>

                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol
                lg="2"
                md="12"
                className="modcol"
                onClick={() => {
                  this.cardClick("Lusail Stadium");
                }}
              >
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://www.qatar2022.qa/sites/default/files/styles/1440x815/public/2022-08/Lusail-Stadium.jpg?h=48c16481&itok=vK9KsyE3"
                    alt="Avatar"
                    className="image"
                  />
                  <div className="text"> Lusail Stadium</div>

                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol
                lg="2"
                md="12"
                className="modcol"
                onClick={() => {
                  this.cardClick("Ahmad Bin Ali Stadium");
                }}
              >
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://www.qatar2022.qa/sites/default/files/styles/1440x815/public/2022-08/Ahmad-Bin-Ali-Stadium.jpg?h=8f9cfe54&itok=zt2GOB01"
                    alt="Avatar"
                    className="image"
                  />
                  <div className="text"> Ahmad Bin Ali Stadium</div>
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol
                lg="2"
                md="12"
                className="modcol"
                onClick={() => {
                  this.cardClick("Al Janoub Stadium");
                }}
              >
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://www.qatar2022.qa/sites/default/files/styles/1440x815/public/2022-08/Al-Janoub-Stadium.jpg?h=f8ea1366&itok=aJpXm9Lf"
                    alt="Avatar"
                    className="image"
                  />
                  <div className="text"> Al Janoub Stadium</div>
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol
                lg="2"
                md="12"
                className="modcol"
                onClick={() => {
                  this.cardClick("Al Thumama Stadium");
                }}
              >
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://www.qatar2022.qa/sites/default/files/styles/1440x815/public/2022-08/Al-Thumama-Stadium.jpg?h=98540297&itok=Gu6kll24"
                    alt="Avatar"
                    className="image"
                  />
                  <div class="text"> Al Thumama Stadium</div>
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>

              <MDBCol
                lg="2"
                md="12"
                className="modcol"
                onClick={() => {
                  this.cardClick("Stadium 974");
                }}
              >
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://www.qatar2022.qa/sites/default/files/styles/1440x815/public/2022-08/Stadium-974.jpg?h=27457cb0&itok=lwq-j9pX"
                    alt="Avatar"
                    className="image"
                  />
                  <div className="text"> Stadium 974 </div>

                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div style={{textAlign:"center"}} >
          <div
            style={{
           textAlign: "center",
           color:"black",
           paddingTop:"10px"

            }}
          >
            © 2022 Copyright:
            <a
            style={{color:"black",paddingLeft:"10px" }}
              className=""
              href="https://github.com/orgs/World-Cup301/repositories"
            >
              World Cup Application
            </a>
          </div>
          <div className="" style={{
              display:"flex",justifyContent:"center",marginLeft:"7%"}}>
            <div
              className="text-center text-white"
              style={{width:"30%",display:"flex",justifyContent:"center" }}
            >
              <MDBContainer className="pt-4" >
                <section className="mb-4">
                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "#3b5998" }}
                    href="https://www.facebook.com/fifaworldcup/"
                    role="button"
                  >
                    <MDBIcon fab className="fab fa-facebook-f" />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "#55acee" }}
                    href="https://twitter.com/fifaworldcup"
                    role="button"
                  >
                    <MDBIcon fab className="fa-twitter" />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="https://www.qatar2022.qa/ar/news"
                    role="button"
                  >
                    <MDBIcon fab className="fa-google" />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "#ac2bac" }}
                    href="https://www.instagram.com/fifaworldcup/"
                    role="button"
                  >
                    <MDBIcon fab className="fa-instagram" />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "#333333" }}
                    href="https://www.tiktok.com/@fifaworldcup"
                    role="button"
                  >
                    <MDBIcon fab className="fa-tiktok" />
                  </MDBBtn>

                  <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "#333333" }}
                    href="https://github.com/orgs/World-Cup301/repositories"
                    role="button"
                  >
                    <MDBIcon fab className="fa-github" />
                  </MDBBtn>
                </section>
              </MDBContainer>
            </div>
          </div>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
