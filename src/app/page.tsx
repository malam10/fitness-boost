'use client'
import Typewriter from 'react-ts-typewriter';
import hadith from './hadith.json';

const randomizedHadith = hadith.sort(() => Math.random() - 0.5);

const App = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <h1 className="mx-20 text-center" style={{ fontSize: '2.5rem' }}>
        The Prophet Muhammad ﷺ said:
      </h1>
      <br></br>
      <h1 className="mx-20 text-center" style={{ fontSize: '1.75rem' }}>
        <Typewriter 
          text={randomizedHadith} 
          cursor={false}
          delay={10000}
        />
      </h1>
    </div>
  );
};

export default App;
