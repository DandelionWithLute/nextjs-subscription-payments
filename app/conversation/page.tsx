'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { NextResponse } from 'next/server';

const page = () => {
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   console.log(inputValue);
  // }, [inputValue]);

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/conversation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValue)
      });
      if (res.ok) {
        throw new NextResponse(JSON.stringify('Successfully posted to api'), {
          status: 200
        });
      }
      console.log(res.json());
    } catch (err) {
      throw new Error('Api catching Failed!');
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstSubContainer}>
        <div className={styles.sidebar}>Sidebar</div>
      </div>
      <div className={styles.secondSubContainer}>
        <div className={styles.talksContainer}>Talkings</div>
        <div className={styles.inputContainer}>
          <form className={styles.inputBar}>
            <input
              id="userInput"
              placeholder="Please send me messages here..."
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className={styles.inputButton}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
