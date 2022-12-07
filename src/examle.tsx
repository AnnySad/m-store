import {createElement as e, useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    return e('div', {className: 'container'}, [
        e('h1', {className: 'fond-bold'}, `test JSX ${count}`),
        e('button',
            {
                className: 'py-2 px-4 border',
                key: 2,
                onClick: () => setCount(count+1)
            }
            , 'Click me !')
    ])
}