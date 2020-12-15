import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const handleClick = () => {
    window.location.href =
      "https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls";
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const confirmation =
        "Are you sure you want to leave this page? All changes will be lost!";
      e.returnValue = confirmation;

      return e;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          href="https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls"
          download="file_example_XLS_10.xls"
          class="btn btn-orange btn-outline btn-xl page-scroll download-button"
        >
          Download sample xls file
        </a>
        <button onClick={handleClick}>Click to download file</button>
      </header>
    </div>
  );
}

export default App;
