import List from "./List";
import Data from "./Data";
import { useState } from "react";

export default function BirthdayCard() {
  let [people, setPeople] = useState(Data);

  return (
    <div>
      <h2>Today</h2>
      <h3>{people.length} birthday reminders</h3>
      <br />
      <List people={people} />
      <br />
      <button onClick={() => setPeople([])}>CLEAR ALL</button>
    </div>
  );
}

//  <List />
