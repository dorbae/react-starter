
import React, { useEffect } from 'react';
import Button from './components/Button';
import styles from './App.module.css';

function HideAndSeek() {
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }

  function byeFn() {
    console.log("destroyed :(");
  };

  useEffect(hiFn, []);
  return <h1>Hide and Seek</h1>;
}
function App() {
  const [counter, setCounter] = React.useState(0);
  const [keyword, setKeyword] = React.useState("");
  const [showing, setShowing] = React.useState(false);
  const onClick = () => { setCounter((current) => current + 1); };
  const onChange = (event) => setKeyword(event.target.value);
  console.log("PATH1");
  useEffect(() => { console.log("PATH2"); }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes", keyword);
  }, [keyword]);
  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={onChange} />
      <h1 className={styles.title}>Hello World</h1>
      <h2>{counter}</h2>
      <Button text={"Continue"} onClick={onClick}></Button>
      <button onClick={onClick}>tt</button>
      <button onClick={() => setShowing((current) => !current)}>{showing ? "Hide" : "Show"}</button>
      {showing ? <HideAndSeek /> : null}
    </div>
  )
}

export default App;
