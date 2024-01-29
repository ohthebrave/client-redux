import React from "react";

function Checkout() {
  const [formStatus, setFormStatus] = React.useState("Send");

  // Simulate user ID for demonstration purposes
  
  const userId = 1;

  const onSubmit = async (e) => {
    e.preventDefault();

    // Extract values from the form
    const street = e.target.elements.inputStreet.value;
    const phone = e.target.elements.inputPhone.value;
    const city = e.target.elements.inputCity.value;

    // Prepare the data for the POST request
    const formData = {
      user_id: userId, // Include the user ID
      street,
      phone,
      city,
      // Add more fields as needed
    };

    try {
      // Send a POST request to your server
      const response = await fetch("https://online-market-msht.onrender.com/addresses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Purchase successful!");
        // You may redirect or perform other actions upon successful submission
      } else {
        setFormStatus("Purchase failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("Purchase failed. Please try again.");
    }
  };

  return (
    <div className="checkout border border-3 rounded">
      <h4 className="ps-4 pt-3">Delivery Address</h4>
      <form className="row g-3" onSubmit={onSubmit}>
        {/* Street */}
        <div className="col-12">
          <label htmlFor="inputStreet" className="form-label">
            Street
          </label>
          <textarea
            className="form-control"
            id="inputStreet"
            placeholder="e.g., Apartment, Floor, Building, Street Name"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Phone Number */}
        <div className="col-12">
          <label htmlFor="inputPhone" className="form-label">
            Phone no.
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputPhone"
            placeholder="e.g., (555) 123-4567"
            
            required
          />
        </div>

        {/* City */}
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" required />
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            {formStatus}
          </button>
        </div>
        {formStatus === "Purchase successful!" && (
          <div className="col-12 mt-3 text-success">
            {formStatus}
          </div>
        )}
      </form>
    </div>
  );
}

export default Checkout;
