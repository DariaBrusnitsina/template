import {useState} from 'react';
import classes from './Counter.module.scss'

export const Conunter = () => {
    const [counter, setCounter] = useState(0)
    function increment() {
        setCounter(prevState => prevState + 1)
    }

    return (
        <div>
            <p>{counter}</p>
            <button className={classes.btn} onClick={increment}>inc</button>
            
        </div>
    );
};

