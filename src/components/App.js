import { render } from "react-dom";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1>Critterpedia+</h1>
      <p>Testing</p>
      <Button>Normal Button</Button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
