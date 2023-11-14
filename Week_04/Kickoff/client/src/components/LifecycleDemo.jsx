import { useEffect, useState } from "react";

function LifecycleDemo() {
  const [count, setCount] = useState(0);
  /**
   * A useEffect with an empty dependency list
   * will only run the callback function on component
   * mounting
   *
   * When a useEffect with an empty dependency list
   * has a callback function that returns another
   * function, that returned function is the cleanup method.
   * The cleanup method of a mounting useEffect
   * will only run on component unmount
   */
  useEffect(() => {
    console.log("LifecycleDemo component mounted.");

    return () => {
      console.log("LifecycleDemo component unmounted.");
    };
  }, []);

  /**
   * A useEffect with a populated dependency list will
   * run the callback function on component mounting
   * and on any subsequent updating of that state value
   */
  useEffect(() => {
    console.log("Lifecycle component updated.");
    let time = Date.now();

    const interval = setInterval(() => {
      let timeSince = (Date.now() - time) / 1000;
      console.log(
        `It has been ${timeSince} seconds since the component has updated.`
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h1>Lifecycle Demo</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={(e) => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default LifecycleDemo;
