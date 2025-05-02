import React,{useState} from "react";

const BundleTarget = () => {
    const [activeStep,setActiveStep]=useState(2)
  
  const optionData = [
    { option: "makeup" },
    { option: "Dress" },
    { option: "Home" },
  ];
  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-md-12 p-0">
            <h1
              className="d-flex justify-content-center text-white"
              style={{ backgroundColor: "rgba(72,126,255,1)" }}
            >
              Bundle Target
            </h1>
          </div>
        </div>
        <div className="row" style={{position:'relative',left:'150px'}}>
          <div className="col-md-12 mt-3 ms-5"
           
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
                  color: activeStep === 2 ? "white" : "rgba(72,126,255,1)",
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
                  backgroundColor: "rgba(256,232,240,1)",
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
                }}
              >
                3
              </span>
              <span className="rgba(48,48,48,1) mx-3">Method</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 shadow " style={{position:'relative' ,top:'30px', left:'250px'}}>
            <div className="fw-bold">
              <input
                type="radio"
                className="form-check-input"
                name="bundleType"
                value="specific"
                // checked={select === "specific"}
                // onChange={handleProductChange}
              />
              <label className="form-check-label px-4 mx-1">Specific Product</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 shadow mt-5"  style={{position:'relative' ,top:'30px',left:'250px'}}>
            <div className="fw-bold">
              <input
                type="radio"
                className="form-check-input"
                name="bundleType"
                value="collection"
                // onChange={handleProductChange}
                // checked={select === "collection"}
              />
              <label className="form-check-label px-4">Products in Collection</label>
            </div>
            <select
              className="form-control mt-2 px-2"
              // onChange={handleProduct}
              // value={myProductName} 
            >
              {optionData.map((item, index) => (
                <option key={index} value={item.option}>
                  {item.option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default BundleTarget;
