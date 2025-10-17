import React, { useState } from "react";

const ChooseBundle = () => {
  const [discount, setDiscount] = useState("");
  const [bundle, setBundle] = useState("");
  const [activeStep,setActiveStep]=useState(1)
  const handleDiscount = (e) => {
    setDiscount(e.target.value);
setActiveStep(1)
  };
  const handleBundle = (e) => {
    setBundle(e.target.value);
     setActiveStep(2)
  };
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-0">
            <h1
              className="d-flex justify-content-center text-white"
              style={{ backgroundColor: "rgba(72,126,255,1)" }}
            >
            Choose Bundle
            </h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12"
            style={{ position: "relative", top: "20px", left: "250px" }}
          >
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
                  // backgroundColor: "rgba(256,232,240,1)",
                  backgroundColor: activeStep === 2 ? "rgba(72,126,255,1)" : "rgba(226,232,240,1)",
                  color: activeStep === 2 ? "white" : "rgba(72,126,255,1)",

                  width: "100px",
                  margin: "0 15px",
                  display: "inline-block",
                }}
              ></span>
              <span
                className=" d-inline-block text-center"
                style={{
                    backgroundColor: activeStep === 2 ? "rgba(72,126,255,1)" : "rgba(226,232,240,1)",

                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  padding: "10px",
                  lineHeight: "15px",
                    color: activeStep === 2 ? "white" : "rgba(72,126,255,1)"
                }}
              >
                2
              </span>
              <span className="mx-3 rgba(48,48,48,1)">Bundle Target</span>
              <span
                style={{
                  height: "2px",
                  backgroundColor: "rgba(256,232,240,1)",
                  width: "100px",
                  margin: "0 15px",
                  display: "inline-block",
                }}
              ></span>

              <span
                className="d-inline-block text-center"
                style={{
                  background: activeStep === 3 ? "rgba(72,126,255,1)" : "rgba(226,232,240,1)",

                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  padding: "10px",
                  color: "rgba(48,48,48,1)",
                  lineHeight: "15px",
                  color: activeStep === 3 ? "white" : "rgba(48,48,48,1)",
                }}
              >
                3
              </span>
              <span className="rgba(48,48,48,1) mx-3">Method</span>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-center   ">
          <div className="col-md-8 shadow py-3 px-2" >
            <input 
              type="radio"
              className="form-check-input "
              value="bundleDiscount"
              name="automatic"
              checked={discount === "bundleDiscount"}
              onChange={handleDiscount}
            />
            <label className="fw-bold mx-3">Bundle by Automatic Discount</label>
            <span className="px-2 py-1" style={{ backgroundColor: "rgba(255,135,67,1)", color:'white', borderRadius:'4px' ,}}>Recommended</span>
            <p>
              Create bundle using automatic discount on your store.Learn more
              about automatic discounts.
            </p>
          </div>

        </div>
        <div className="row mt-5 d-flex justify-content-center ">
          <div className="col-md-8 shadow py-3 px-2">
            <input
            type="radio"
              className="form-check-input"
              name="bundles"
              value="bundleVariant"
              checked={bundle === "bundleVariant"}
              onChange={handleBundle}
            />
            <label className="fw-bold mx-3">Bundle By Variant</label>
            <p>The variant of the products will act as bundles.Learn more about the variant sysytem.</p>
            <p>The variant of the products will act as bundles.Learn more about the variant sysytem.</p>
          </div> 
        </div>

      </div>
    </>
  );
};

export default ChooseBundle;
