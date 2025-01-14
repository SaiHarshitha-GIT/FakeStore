import React from "react";
import useCatpcha from "../hooks/use-captcha";

function Login() {
  const code = useCatpcha();

  const handleRefresh = () => {};
  return (
    <div className="container-fluid">
      <dl>
        <dt>UserName</dt>
        <dd>
          <input type="text" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="text" />
        </dd>
        <dt>Enter the number</dt>
        <dd>{code}</dd>
        <input type="text" name="" id="" />
        <button onClick={handleRefresh}>Refresh the code</button>
      </dl>
    </div>
  );
}

export default Login;
