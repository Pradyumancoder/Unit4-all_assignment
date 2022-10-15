// Write Code here
import { useState } from "react";
function PlayPause() {
  const [state, setState] = useState(true);

  return (
    <div>
      <h1 className="heading">The state is {state ? "paused" : "playing"}</h1>
      <button className="initialstate" onClick={() => setState(!state)}>
        {state ? "paused" : "playing"}
      </button>
    </div>
  );
}
export default PlayPause;
