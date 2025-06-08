import React, { useState } from 'react';
import './submission.css';

const initialState = {
  name: '',
  email: '',
  title: '',
  story: '',
};

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function SubmissionForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(form.email)) newErrors.email = 'Invalid email';
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.story.trim()) newErrors.story = 'Story is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    try {
      const res = await fetch('/api/submit-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm(initialState);
      } else {
        setErrors({ submit: 'Submission failed. Try again.' });
      }
    } catch {
      setErrors({ submit: 'Network error. Try again.' });
    }
  };

  if (submitted) {
    return <div style={{ fontSize: '1.2em', color: 'green' }}>✅ Thank you for your submission!</div>;
  }

  return (
    <div className="cardWrap">
      <div className="cardLeft">
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <h2>Submit Your Story</h2>
          <div>
            <label>Name:<br />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>
          <div>
            <label>Email:<br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div>
            <label>Title:<br />
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
            </label>
            {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
          </div>
          
        </form>
      </div>
      <div className="cardRight">
        
            <div>
            <label >Story:<br />
              <textarea
              
                name="story"
                value={form.story}
                onChange={handleChange}
                rows={5}
              />
            </label>
            {errors.story && <div style={{ color: 'red' }}>{errors.story}</div>}
          </div>
          <button type="submit" style={{ marginTop: 10 }}>Submit</button>
          {errors.submit && <div style={{ color: 'red' }}>{errors.submit}</div>}
        
        
        <div className="barcode"></div>
      </div>
    </div>
  );
}
