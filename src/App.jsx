import React from 'react';
import Layout from './layouts/Layout';
import Hero from './components/Hero';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Carousel />
      </Layout>
    </div>
  );
}

export default App;