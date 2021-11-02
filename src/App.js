import "./App.css";
import GoogleLogin from "react-google-login";

function App() {
  const handleOnFailure = (result) => {
    alert(result);
  };
  const handleOnSuccess = (googleData) => {
    console.log(googleData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
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
        </div>
      </header>
    </div>
  );
}

export default App;
