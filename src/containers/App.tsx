import React, { useState } from 'react';
import { isAfter, startOfToday, startOfYesterday } from 'date-fns';
import { ReactQueryDevtools } from 'react-query/devtools';
import Spin from 'antd/es/spin';
import RangePicker from '../components/range-picker';
import { useMonetizationApi } from '../services/api/monetization';
import { formatDate, isDevelopment } from '../util';
import type { Dates } from './App.types';
import classes from './App.module.css';
import Results from '../components/results';
import Button from 'antd/es/button';

const disableDate = (current: Date): boolean => isAfter(current, new Date());

const App: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(true);
  const [start, setStart] = useState<Date>(startOfYesterday());
  const [end, setEnd] = useState<Date>(startOfToday());
  const { data, isLoading, error } = useMonetizationApi({
    start,
    end,
    enabled,
    onSuccess: () => setEnabled(false),
  });

  const handleDateChange = (dates: Dates) => {
    const [startDate, endDate] = dates || [];

    if (!startDate || !endDate) return;

    if (formatDate(start) !== formatDate(startDate)) {
      // updating date only if it changed
      setStart(startDate);
    }

    if (formatDate(end) !== formatDate(endDate)) {
      // updating date only if it changed
      setEnd(endDate);
    }
  };

  const doFetch = (e: any) => {
    e.preventDefault();
    setEnabled(true);
  };

  return (
    <>
      <header className={classes.header}>I am header</header>
      <main className={classes.main}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Date interval
          <div className={classes.rangePicker}>
            <RangePicker
              disabled={isLoading}
              disabledDate={disableDate}
              value={[start, end]}
              size="large"
              allowClear={false}
              separator="—"
              onChange={handleDateChange}
            />
          </div>
        </label>
        <Button
          type="primary"
          size="large"
          disabled={isLoading}
          onClick={doFetch}
        >
          Show
        </Button>
        {isLoading && <Spin size="large" className={classes.spinner} />}
        {!isLoading && !error && <Results {...data} />}
      </main>
      <footer className={classes.footer}>I am footer</footer>
      {isDevelopment() && <ReactQueryDevtools initialIsOpen={false} />}
    </>
  );
};

export default App;
