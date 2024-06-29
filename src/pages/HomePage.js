import React from 'react';
import Footer from '@components/Footer';

const HomePage = () => {
  return (
    <div style={{height: '100%', width: '100%', backgroundColor: 'red' }}>
      <main>
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;