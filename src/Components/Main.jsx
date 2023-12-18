import React, { useState } from 'react';
import { MDBCollapse } from 'mdbreact'; // Import the MDBCollapse component
import './Main.css';

function Main() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0); // Initialize discountPercentage with 0
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [savedPrice, setSavedPrice] = useState(null);
  const [isPercentageOpen, setIsPercentageOpen] = useState(false); // State to manage the slider visibility

  const calculateDiscount = () => {
    if (originalPrice && discountPercentage) {
      const discountedPrice =
        originalPrice - (originalPrice * discountPercentage) / 100;
      setDiscountedPrice(discountedPrice.toFixed(2));

      // Calculate saved price
      const savedPrice = originalPrice - discountedPrice;
      setSavedPrice(savedPrice.toFixed(2));
    }
  };

  const resetCalculator = () => {
    setOriginalPrice('');
    setDiscountPercentage(0); // Reset discountPercentage to 0
    setDiscountedPrice(null);
    setSavedPrice(null);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            className="image"
            src="https://play-lh.googleusercontent.com/RDxsVeEIYYW5qe2V3J-3XrhBFHxFaEdnoVhKuqGy57Zy9qJYyJWHH4RteR7arjPpj_E"
            alt=""
          />
          <p className="p">
            Online calculator to determine the final price after discount, the
            amount saved, or the original price before discount related to a
            discounted purchase.
          </p>
        </div>
        <div className="col-6">
          <div
            className="card"
            style={{
              boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            }}
          >
            <div
              className="card-header  text-white text-center"
              style={{ backgroundColor: ' #040b0b' }}
            >
              <h2>Discount Calculator</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label className="lab" htmlFor="originalPrice">
                  Original Price (&#8377;):
                </label>
                <input
                  type="number"
                  id="originalPrice"
                  className="form-control"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="lab" htmlFor="discountPercentage">
                  Discount Percentage (%):
                </label>
                <input
                  type="text"
                  id="discountPercentage"
                  className="form-control"
                  value={discountPercentage}
                  onFocus={() => setIsPercentageOpen(true)} // Open slider on focus
                />
                <MDBCollapse
                  id="percentageSlider"
                  isOpen={isPercentageOpen} // Manage the slider visibility
                >
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                    className="form-range"
                  />
                  <p className="text-center">Value: {discountPercentage}%</p>
                  <button 
                    className="btn btn-dark rounded-pill btn-sm"
                    onClick={() => setIsPercentageOpen(false)} // Close slider on button click
                  >
                    Apply
                  </button>
                </MDBCollapse>
              </div>
              <button
                className="btn btn-warning mr-2 mt-3 m-2 rounded-pill"
                onClick={calculateDiscount}
                style={{ backgroundColor: '#530505' }}
              >
                Calculate
              </button>
              <button
                className="btn btn-dark m-2 rounded-pill"
                onClick={resetCalculator}
              >
                Reset
              </button>
            </div>
            {discountedPrice !== null && (
              <div
                className="card-footer text-center"
                style={{ backgroundColor: '#040b0b' }}
              >
                <p className="pp">Original Price: &#8377;{originalPrice}</p>
                <p className="pp">Price after Discount: &#8377;{discountedPrice}</p>
                <p className="pp">Saved Price: &#8377;{savedPrice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
