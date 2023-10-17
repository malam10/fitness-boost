'use client'
import Typewriter from 'react-ts-typewriter';
import boosts from './boosts.json';

const randomizedBoosts = boosts.sort(() => Math.random() - 0.5);

const App = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <h1 className="mx-20 text-center" style={{ fontSize: '2.75rem' }}>
        <Typewriter 
          text={randomizedBoosts} 
          cursor={false}
          delay={10000}
        />
      </h1>
    </div>
  );
};

export default App;
