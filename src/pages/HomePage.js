import React from 'react';
import Footer from '@components/Footer';

const HomePage = () => {
  return (
    <div style={{backgroundColor: 'var(--app-primary-color)', color: 'var(--app-secondary-color)' }}>
      <main>
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;