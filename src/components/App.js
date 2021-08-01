import { render } from "react-dom";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1>Critterpedia+</h1>
      <Button>Normal Button</Button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
