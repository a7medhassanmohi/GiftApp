import React from "react";
import logo from "../../images/logo_amour_ft.png";

function ContactPage() {
  return (
    <div className="contact__">
      <div className="container ">
        <div className="row mt-5">
          <div className="col-11 mx-auto">
            <div className="mapwraper ">
              <div
                style={{
                  "max-width": "100%",
                  "list-style": "none",
                  "-webkit-transition": "none",
                  transition: "none",
                  overflow: "hidden",
                  height: "700px",
                }}
              >
                <div
                  id="display-googlemap"
                  style={{ height: "100%", width: "100%", "max-width": "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: "0" }}
                    frameBorder={0}
                    src="https://www.google.com/maps/embed/v1/place?q=alexandria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  />
                </div>
                <a
                  className="googlemap-html"
                  href="https://www.embed-map.com"
                  id="injectmap-data"
                ></a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "#display-googlemap img.text-marker{max-width:none!important;background:none!important;}img{max-width:none}",
                  }}
                />
              </div>
            </div>
            <div className="form__">
              <div className="form__wraper">
                <img src={logo} alt="" />
                <p>
                  “Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat,
                </p>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <textarea name="" id="" placeholder="Your Message"></textarea>
                  <button>SEND</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
