import React, { useReducer } from "react";

const initialState = {
  viewersCount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "join":
      return {
        viewersCount: state.viewersCount + 1,
      };

    case "exit":
      return {
        viewersCount: state.viewersCount - 1,
      };
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleJoinClick = () => {
    dispatch({
      type: "join",
    });
  };

  const handleExitClick = () => {
    dispatch({
      type: "exit",
    });
  };
  return (
    <div className="container-fluid m-5">
      <h3>Live</h3>
      <iframe
        width={400}
        height={300}
        src="https://youtube.com/embed/_Z0ZQT0FttM"
      />
      <div className="bi bi-eye m-3">{state.viewersCount}</div>
      <div className="row">
        <div className="col">
          <p>User1</p>
          <button className="btn btn-primary m-3" onClick={handleJoinClick}>
            Join
          </button>
          <button className="btn btn-danger" onClick={handleExitClick}>
            Exit
          </button>
        </div>

        <div className="col">
          <p>User2</p>
          <button className="btn btn-primary m-3" onClick={handleJoinClick}>
            Join
          </button>
          <button className="btn btn-danger" onClick={handleExitClick}>
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReducerDemo;
