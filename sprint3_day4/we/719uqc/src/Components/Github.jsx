import { useReducer, useState } from "react";
import { fetchUser } from "../Reducer/github/action";
import { githubReducer } from "../Reducer/github/reducer";

const initValue = {
  isLoading: false,
  isError: false,
  data: [],
  token: ""
};
// WRITE GITHUBCOMPONENT
// MAKE A REQUEST USING GITHUB API
// DISPLAY USERS

function GithubComponent() {
  const [state, dispatch] = useReducer(githubReducer, initValue);
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="add something"
        />
        <button onClick={() => fetchUser(dispatch, text)}>Search</button>
      </div>
      <div>
        {state.data.map((item) => (
          <div key={item.login}> {item.login}</div>
        ))}
      </div>
    </div>
  );
}
export default GithubComponent;
