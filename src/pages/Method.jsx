import React, { useState } from "react";

const Method = () => {
  const [offerMethod, setOfferMethod] = useState("");
  const [activeStep, setActiveStep] = useState(3);
  const [checkOffer, setCheckOffer] = useState(false);
  const handleOfferMethod = (e) => {
    setOfferMethod(e.target.value);
  };
  const handleCheckBox = (e) => {
    setCheckOffer(e.target.checked);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1
              className="d-flex justify-content-center text-white"
              style={{ backgroundColor: "rgba(72,126,255,1)" }}
            >
              Bundle Target
            </h1>
          </div>
        </div>
        <div className="row" style={{ position: "relative", left: "150px" }}>
          <div className="col-md-12 mt-3 ms-5">
            <div className="">
              <span
                className=" d-inline-block text-center"
                style={{
                  backgroundColor: "rgba(72,126,255,1)",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  color: "white",
                  padding: "10px",
                  lineHeight: "15px",
                }}
              >
                1
              </span>

              <span className="mx-2 rgba(48,48,48,1)">Bundle Type</span>
              <span
                style={{
                  height: "2px",
                  backgroundColor:
                    activeStep === 3
                      ? "rgba(72,126,255,1)"
                      : "rgba(226,232,240,1)",
                  color: activeStep === 3 ? "white" : "rgba(72,126,255,1)",

                  width: "100px",
                  margin: "0 15px",
                  display: "inline-block",
                }}
              ></span>
              <span
                className=" d-inline-block text-center"
                style={{
                  backgroundColor:
                    activeStep === 3
                      ? "rgba(72,126,255,1)"
                      : "rgba(226,232,240,1)",
                  color: activeStep === 3 ? "white" : "rgba(72,126,255,1)",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  padding: "10px",
                  lineHeight: "15px",
                }}
              >
                2
              </span>
              <span className="mx-3 rgba(48,48,48,1)">Bundle Target</span>
              <span
                style={{
                  height: "2px",
                  // backgroundColor: "rgba(256,232,240,1)",
                  backgroundColor:
                    activeStep === 3
                      ? "rgba(72,126,255,1)"
                      : "rgba(226,232,240,1)",
                  color: activeStep === 3 ? "white" : "rgba(72,126,255,1)",
                  width: "100px",
                  margin: "0 15px",
                  display: "inline-block",
                }}
              ></span>

              <span
                className="d-inline-block text-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  padding: "10px",
                  color: "rgba(48,48,48,1)",
                  lineHeight: "15px",
                  backgroundColor:
                    activeStep === 3
                      ? "rgba(72,126,255,1)"
                      : "rgba(226,232,240,1)",
                  color: activeStep === 3 ? "white" : "rgba(72,126,255,1)",
                }}
              >
                3
              </span>
              <span className="rgba(48,48,48,1) mx-3">Method</span>
            </div>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className=" show d-block col-md-12 rounded-2 shadow-lg">
            <h6 className="fw-bold">Method</h6>
            <input
              type="radio"
              className="form-check-input"
              value="method"
              onChange={handleOfferMethod}
              checked={offerMethod === "method"}
            />

            <label className="fw-bold">Offer Creator</label>
            <p>
              Show up new wideBundle offers on the product.Learn more about the
              offer creator
            </p>

            <input
              type="radio"
              className="form-check-input"
              value="synchronize"
              onChange={handleOfferMethod}
              checked={offerMethod === "synchronize"}
            />
            <label className="fw-bold">Re-synchronize offers</label>
            <p>
              Update wideBundle with the offer thst already exist on this
              product.Learn more about the re-synchronization.
            </p>
            <hr />
            {offerMethod === "method" && (
              <div className="">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="check"
                  name="checkOffer"
                  onChange={handleCheckBox}
                  checked={checkOffer}
                />
                <label className="fw-bold">
                  Create offer on a copy of the selected product(optional)
                </label>
                <p>
                  The selected product will be duplicated so that you can first
                  test your offer ideas without changing your product.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Method;
