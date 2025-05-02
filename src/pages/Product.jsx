import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [selectOption, setSelectOption] = useState("");
  const [select, setSelect] = useState("");
  const [myProductName, setMyProductName] = useState(" ");
  const [check, setCheck] = useState("");
  const [offer, setOffer] = useState("");
  const navigate = useNavigate();

  // const [show,setShow]=useState(false)
  const handleChange = (e) => {
    setSelectOption(e.target.value);
  };
  const handleProductChange = (e) => {
    setSelect(e.target.value);
  };
  const handleProduct = (e) => {
    setMyProductName(e.target.value);
  };
  const optionData = [
    { option: "makeup" },
    { option: "Dress" },
    { option: "Home" },
  ];
  const handleOffer = (e) => {
    setOffer(e.target.value);
  };
  const handleCheckBox = (e) => {
    setCheck(e.target.value);
  };
  const searchProduct=()=>{
   navigate('/choosebundle') 
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="bg-primary text-white mt-3 px-5 py-3 rounded-4 w-100 text-center">
              Choose Bundle Type
            </h1>
          </div>
          <div className="row mt-3 ">
            <div className="col-md-6 shadow-sm rounded-4 ">
              <h6 className="fs-6 fw-bold mt-2 mx-2">Bundle Type</h6>
              <div className="form-check mt-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="productType"
                  value="discount"
                  checked={selectOption === "discount"}
                  onChange={handleChange}
                  id="discount"
                />
                <label className=" form-check-label fw-bold" htmlFor="discount">
                  Bundles by Automatic Discounts
                </label>
              </div>
              <p className="fw-light fs-6">
                create bundle using Auomatic discount on your stores.Learn more
                about automatic discounts.
              </p>
              <div className="form-check mt-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="productType"
                  value="variant"
                  checked={selectOption === "variant"}
                  onChange={handleChange}
                  id="variant"
                />
                <label className="fw-bold form-check-label" htmlFor="variant">
                  Bundles By Variants
                </label>
              </div>
              <p className="fw-light fs-6">
                The varients of your products will act as bundles.Learn more
                about varient system.
              </p>
            </div>

            <div className="col-md-6 shadow-sm rounded-4">
              <div className="fw-bold">
                <input
                  type="radio"
                  className="form-check-input"
                  name="bundleType"
                  value="specific"
                  checked={select === "specific"}
                  onChange={handleProductChange}
                />
                <label className="form-check-label mx-2">Specific Product</label>
              </div>
              <div className="fw-bold">
                <input
                  type="radio"
                  className="form-check-input"
                  name="bundleType"
                  value="collection"
                  onChange={handleProductChange}
                  checked={select === "collection"}
                />
                <label className="form-check-label">
                  Products in Collection
                </label>
              </div>

              <select
                className="form-control mt-3"
                onChange={handleProduct}
                value={myProductName}
              >
                {optionData.map((item, index) => (
                  <option key={index} value={item.option}>
                    {item.option}
                  </option>
                ))}
              </select>
              <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-primary text-white " onClick={searchProduct}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        {selectOption==='variant' &&(
          <div className="row mt-3  ">
            <div className=" show d-block col-md-12 rounded-4 shadow-lg">
              <h6 className="fw-bold">Method</h6>
              <input
                type="radio"
                className="form-check-input"
                value="method"
                onChange={handleOffer}
                checked={offer === "method"}
              />
            
              <label className="fw-bold">Offer Creator</label>
              <p>
                Show up new wideBundle offers on the product.Learn more about
                the offer creator
              </p>
        
          
              <input
                type="radio"
                className="form-check-input"
                value="synchronize"
                onChange={handleOffer}
                checked={offer === "synchronize"}
              />
            
              <label className="fw-bold">Re-synchronize offers</label>
              <p>
                Update wideBundle with the offer thst already exist on this
                product.Learn more about the re-synchronization.
              </p>
              <hr />
                   {offer==='method' && (
              <div className="">

                <input
                  type="checkbox"
                  className="form-check-input"
                  value={check}
                  onChange={handleCheckBox}
                />
           
                <label className="fw-bold">Create offer on a copy of the selected product(optional)</label>
                <p>The selected product will be duplicated so that you can first test your offer ideas without changing your product.</p>
             
                </div>
                
           
            )}
            </div>
              
          </div>
   
        ) }
        </div>
   
      </div>

    </>
  );
};

export default Product;
