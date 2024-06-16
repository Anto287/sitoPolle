import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;