
import React, { useState } from 'react';
import axios from 'axios';
 
const Booktestdrive = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
 
    try {
      const formData = {
        vehicle: e.target.vehicle.value,
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        date: e.target.date.value,
        time: e.target.time.value,
        notes: e.target.notes.value
      };
 
      await axios.post("https://imanihyrax.alwaysdata.net/api/book_testdrive", formData);
      
      setSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to book. Please try again.");
    } finally {
      setLoading(false);
    }
  };
 
  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '32px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'0 auto 16px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Test Drive Booked!</h2>
          <p style={{ color: '#6b7280' }}>We'll see you soon. A confirmation email has been sent.</p>
          <button 
            onClick={() => setSubmitted(false)}
            style={{ marginTop: '24px', width: '100%', backgroundColor: '#2563eb', color: 'white', fontWeight: '600', padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }
 
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '48px 16px' }}>
      <div style={{ maxWidth: '512px',margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827' }}>Book a Test Drive</h1>
          <p style={{ color: '#6b7280', marginTop: '8px' }}>Schedule your visit in seconds</p>
        </div>
 
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Vehicle</label>
            <select name="vehicle" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '16px' }}>
              <option value="">Select a vehicle</option>
              <option>BMW M4</option>
              <option>Bugatti veyron</option>
              <option>H6 Guerriera</option>
              <option>Mercedes AMG-GT</option>
              <option>Maserati</option>
              <option >Ford Mustang</option>
              <option >Lamborghini Huracan</option>
              <option >Porsche 718 Cayman</option>
            </select>
          </div>
 
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>First Name</label>
              <input name="firstName" type="text" required placeholder="John" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '16px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Last Name</label>
              <input name="lastName" type="text" required placeholder="Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '16px' }} />
            </div>
          </div>
 
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Phone</label>
            <input name="phone" type="tel" required placeholder="(555) 123-4567" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '16px' }} />
          </div>
 
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Email</label>
            <input name="email" type="email" required placeholder="john@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '16px' }} />
          </div>
 
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Date</label>
              <input name="date" type="date" required min={new Date().toISOString().split('T')[0]} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '16px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Time</label>
              <select name="time" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '16px' }}>
                <option value="">Select time</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
              </select>
            </div>
          </div>
 
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Notes (optional)</label>
            <textarea name="notes" rows={3} placeholder="Any special requests?" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '16px', resize: 'none' }} />
          </div>
 
          <button 
            type="submit"
            disabled={loading}
            style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', fontWeight: '600', padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', opacity: loading ? 0.5 : 1 }}
          >
            {loading ? 'Booking...' : 'Confirm Test Drive'}
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default Booktestdrive;
