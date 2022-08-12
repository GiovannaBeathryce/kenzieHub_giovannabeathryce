import RoutesMain from "./Routes";
import { GlobalStyles } from "./GlobalSyles";
import AuthProvider from "./Contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <RoutesMain />
    </AuthProvider>
  );
}

export default App;
