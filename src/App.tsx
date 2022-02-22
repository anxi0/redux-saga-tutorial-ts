import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { CONFIG_LOAD } from "./store/actions/config";
import {
  increase,
  asyncIncrease,
  decrease,
  asyncDecrease,
} from "./store/actions/counter";

function App() {
  const config = useSelector<any, any>((state) => state.configReducer);
  const count = useSelector<any, any>((state) => state.counterReducer);
  const dispatch = useDispatch();
  const [chosen, setChosen] = useState<string>("");
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div>
            <button onClick={() => dispatch(increase())}>INC</button>
            <button onClick={() => dispatch(asyncIncrease())}>ASY_INC</button>
          </div>
          <div>{count}</div>
          <div>
            <button onClick={() => dispatch(decrease())}>DEC</button>
            <button onClick={() => dispatch(asyncDecrease())}>ASY_DEC</button>
          </div>
        </div>

        <div>
          <button onClick={() => dispatch({ type: CONFIG_LOAD })}>click</button>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {config === "" ? (
            <div>{config}</div>
          ) : (
            <div>
              {Object.keys(config).map((cur) => (
                <div onClick={() => setChosen(cur)}>{cur}</div>
              ))}
            </div>
          )}
        </div>
        <div>{chosen !== "" && config[chosen]}</div>
      </div>
    </div>
  );
}

export default App;
