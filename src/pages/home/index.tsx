import { useState } from 'react'

export const Home = () => {
    let[count, setCount] = useState<number>(0);

     const handeClick = () : any => {
      setCount(count);
      return count + 1;
    }
    return (
        <>
        <button onClick={handeClick}>Current count: { count }</button>
       </>);
}