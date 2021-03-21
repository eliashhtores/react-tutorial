import { useState, useEffect } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [showCounter, setShowCounter] = useState(false)

    // componentDidMount and update
    useEffect(() => {
        console.log('Use effect')
    }, [count])

    return (
        <div className="counter">
            <button onClick={() => setShowCounter(!showCounter)}>
                {!showCounter ? 'Show Counter' : 'Hide Counter'}
            </button>

            {showCounter &&
                <div>
                    <h1>Welcome to the counter!</h1>
                    <p>The count is: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Decrement</button>
                    <button onClick={() => setCount(count * 2)}>Times 2</button>
                </div>
            }
        </div>
    )
}

export default Counter