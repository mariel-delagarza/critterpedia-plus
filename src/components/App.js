import { render } from "react-dom";
import { BasicButton } from "./BasicButton";
import { LargeIconButton } from "./LargeIconButton";
import { Instructions } from "./Instructions";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const App = () => {
  return (
    <div>
      <h1>Critterpedia+</h1>
      <LargeIconButton>See all the bugs</LargeIconButton>
      <LargeIconButton>See all the fish</LargeIconButton>
      <div className="month-ui" /*grid container*/>
        {months.map((month) => {
          return (
            <BasicButton key={month} class="month">
              {month}
            </BasicButton>
          );
        })}
      </div>

      <Instructions>
        <p className="instructions">
          Enter time of day, select AM or PM, and select month to see which
          critters are available
        </p>
      </Instructions>
      <Instructions>
        <p className="instructions">Choose day time interval</p>
      </Instructions>
      <Instructions>
        <p className="instructions">Search by critter name</p>
      </Instructions>
    </div>
  );
};

render(<App />, document.getElementById("root"));
