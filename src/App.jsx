import { useEffect, useState } from "react";
import AppRouter from "./Router/AppRouter";
import ScreenLoader from "./Components/ScreenLoader/ScreenLoader";

import "./App.scss";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const handleLoader = setTimeout(() => setLoader(false), 3000);

    return () => clearTimeout(handleLoader);
  }, []);

  return <>{loader ? <ScreenLoader /> : <AppRouter />}</>;
}

export default App;
