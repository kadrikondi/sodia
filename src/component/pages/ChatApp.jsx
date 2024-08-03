import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {Row,Col} from "react-bootstrap";
import girl from "../asset/image/girl.webp";
import man from "../asset/image/man.webp";


const Chat = () => {
  
  return (
   
   <Container fluid className="py-4" style={{ backgroundColor: "#eee" }}>
      <Row className="d-flex justify-content-center">
        <Col md="10" lg="8" xl="6">
          <Card id="chat2" style={{ borderRadius: "10px" }}>
          <p style={{backgroundColor:"purple"}} className="lg p-3 me-3 mb-1 text-white rounded-3 d-flex flex-row justify-content-center">
                Andrew Work  
              </p>
             <div className="CardBody">
                <div className="divider d-flex justify-content-center mb-4">
                  <p
                    className="text-center mx-3 mb-0"
                    style={{ color: "#a2aab7" }}
                  >
                   Today
                  </p>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p style={{backgroundColor:"purple"}} className="small p-2 me-3 mb-1 text-white rounded-3 ">
                      Hiii, I'm good.
                    </p>
                    <p style={{backgroundColor:"purple"}} className="small p-2 me-3 mb-1 text-white rounded-3">
                      How are you doing?
                    </p>
                    <p style={{backgroundColor:"purple"}} className="small p-2 me-3 mb-1 text-white rounded-3">
                      Long time no see! Tomorrow office. will be free on sunday.
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:06
                    </p>
                  </div>
                  <img
                    src={girl}
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src={man}
                    alt="avatar 2"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 text-white rounded-3"
                      style={{backgroundColor:"purple"}}
                    >
                      Okay
                    </p>
                    <p
                      className="small p-2 ms-3 mb-1 text-white rounded-3"
                      style={{backgroundColor:"purple"}}
                    >
                      We will go on Sunday?
                    </p>
                    <p className="small ms-3 mb-3 rounded-3  text-muted">
                      00:07
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4">
                  <div>
                    <p style={{backgroundColor:"purple"}} className="small p-2 me-3 mb-1 text-white rounded-3">
                      That's awesome!
                    </p>
                    <p style={{backgroundColor:"purple"}} className="small p-2 me-3 mb-1 text-white rounded-3">
                      I will meet you Sandon Square sharp at 10 AM
                    </p>
                    <p style={{backgroundColor:"purple"}} className="small p-2 me-3 mb-1 text-white rounded-3">
                      Is that okay?
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:09
                    </p>
                  </div>
                  <img
                    src={girl}
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src={man}
                    alt="avatar 2"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 text-white rounded-3"
                      style={{backgroundColor:"purple"}}
                    >
                      Okay i will meet you on Sandon Square
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-white text-muted">
                      00:11
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4">
                  <div>
                    <p style={{backgroundColor:"purple"}} className="small p-2 me-3 mb-1 text-white rounded-3">
                      Do you have pictures of my last Visit?
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:11
                    </p>
                  </div>
                  <img
                    src={girl}
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src={man}
                    alt="avatar 2"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 text-white rounded-3"
                      style={{backgroundColor:"purple"}}
                    >
                      Sorry I don't have. i changed my phone.
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted">
                      00:13
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <div>
                    <p style={{backgroundColor:"purple"}} className="small p-2 me-3 mb-1 text-white rounded-3">
                      Okay then see you on sunday!!
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:15
                    </p>
                  </div>
                  <img
                    src={girl}
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>
                </div>       
            <div className="text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src={man}
                alt="avatar 2"
                style={{ width: "45px", height: "100%" }}
              />
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
              ></input>
          </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
