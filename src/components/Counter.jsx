import '../styles/counter.css'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <section className='Counter'>
            <h1>Counter Built On React.js</h1>
            <div className='Counter-UI'>
                <div className='Count'>
                    {count}
                </div>
                <div className='Buttons'>
                    <button onClick={increment} className='increment-btn'>+</button>
                    <button onClick={decrement} className='decrement-btn'>-</button>
                </div>
            </div>
        </section>
    );
}

export default Counter;