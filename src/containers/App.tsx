import React from 'react';
import classes from './App.module.css';

const App: React.FC = () => {
  return (
    <>
      <header className={classes.header}>I am header</header>
      <main className={classes.main}>I am main</main>
      <footer className={classes.footer}>I am footer</footer>
    </>
  );
};

export default App;
