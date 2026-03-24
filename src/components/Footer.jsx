import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Section 1: About */}
      <div style={styles.section}>
        <h3>About Us</h3>
        <p>At imani car sales we are passionate about connecting car enthusiasts with their dream 
           vehicles.Since our founding,our mission has been to provide a seamless and exciting 
           experience for anyone looking to explore,buy or maintain cars.From vintage classics to 
           modern supercars and reliable family vehicles.We curate a wide range of options to 
           satisfy every automotive desire.</p>
      </div>

      {/* Section 2: Contact Info */}
      <div style={styles.section}>
        <h3>Contact</h3>
        <p>Email: info@carsales.com</p>
        <p>Phone: +274708160616</p>
        <p>Address: 123 Car Street, Auto City</p>
      </div>

      {/* Section 3: Social Media */}
      <div style={styles.section}>
        <h3>Follow Us</h3>
        <p>Stay connected to Imani car sales on Whatsapp,
         Instagram and X to get the latest updates on new car arrivals,
         exclusive offers and spare part deals.Follow us to see trending vehicles,special promotions 
         and important announcements in real time.Join our community and never miss a chance to drive 
         your dream car!</p>
        <div style={styles.socialLinks}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
    </footer>
  );
};

// Inline styles
const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px',
    backgroundColor: '#111',
    color: '#fff',
    flexWrap: 'wrap',
  },
  section: {
    flex: '1',
    margin: '10px',
    minWidth: '200px',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
};

export default Footer;