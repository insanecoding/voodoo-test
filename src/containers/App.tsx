import { startOfToday, startOfYesterday } from 'date-fns';
import React from 'react';
import { useAPIData } from './App.hooks';
import classes from './App.module.css';

const yesterday = startOfYesterday();
const today = startOfToday();

const App: React.FC = () => {
  const { data, isLoading, error } = useAPIData({
    start: yesterday,
    end: today,
  });

  console.log('=== ', data);

  return (
    <>
      <header className={classes.header}>I am header</header>
      <main className={classes.main}>I am main</main>
      <footer className={classes.footer}>I am footer</footer>
    </>
  );
};

export default App;
