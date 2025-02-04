// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import styles from './Counter.module.css';
// eslint-disable-next-line react/prop-types
export default function Counter({ count, change }) {

    function decrement() {
        if (count > 0) {
            change(prev => prev - 1);
        }
    }

    function reset() {
        change(0);
    }

    function increment() {
        if (count < 30) {
            change(prev => prev + 1);
        }
    }

    return (
        <div className={styles.counter}>
            <span className={styles.count}>
                <h1>
                    {count}
                    <br />
                    Counter
                </h1>
                <p>limit 0 - 30</p>
            </span>
            <div className={styles.btn_section}>
                <button className={styles.decrease} onClick={decrement}>-</button>
                <button className={styles.reset} onClick={reset}>Reset</button>
                <button className={styles.increase} onClick={increment}>+</button>
            </div>
        </div>
    )
}