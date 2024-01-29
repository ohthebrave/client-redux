import React from 'react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const { name, email, message } = e.target.elements;
    let formData = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

console.log(formData);

    try {
      const response = await fetch('http://127.0.0.1:5000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Submitted successfully!');
        e.target.reset();
      } else {
        setFormStatus('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('Submission failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3"> Contact Form </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
