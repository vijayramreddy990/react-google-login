import "./App.css";
import GoogleLogin from "react-google-login";
import { useState } from "react";

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleOnFailure = (result) => {
    alert(result);
  };

  const handleOnSuccess = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          {loginData ? (
            <div>
              <h3>you logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
              // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              clientId={
                "792005227435-10itdnmrvm6hclql2oer5ps8k9os1oq6.apps.googleusercontent.com"
              }
              buttonText="Log in with Google"
              onSuccess={handleOnSuccess}
              onFailure={handleOnFailure}
              cookiePolicy={"single_host_origin"}
            ></GoogleLogin>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
