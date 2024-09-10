import { useState } from "react";

function Minus({setCount, count}) {
    const [clicks, setClicks] = useState(0);
    console.log('Minus Render');
    
    const handleClick = () => {
        setClicks(clicks + 1);
        setCount(count - 1);
    }

    return (

        <>
            <button onClick={handleClick}>- clicks: {clicks}</button>
        </>
    );
}

export default Minus;

// const minusComponent = () => (<></>)

// class PlusComponent extends React.Component {
//     render() {
//         return <></>;
//     }
// }