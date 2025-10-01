import { useEffect, useState } from "react";
import "./App.scss";
import AppRouter from "./Router/AppRouter";
import ScreenLoader from "./Components/ScreenLoader/ScreenLoader";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const handleLoader = () => setLoader(false);

    addEventListener("load", handleLoader);

    return () => window.removeEventListener("load", handleLoader);
  }, []);

  return <>{loader ? <ScreenLoader /> : <AppRouter />}</>;
}

export default App;
