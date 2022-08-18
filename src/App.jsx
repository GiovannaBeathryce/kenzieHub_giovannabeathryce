import RoutesMain from "./Routes";
import { GlobalStyles } from "./GlobalSyles";
import AuthProvider from "./Contexts/AuthContext";
import MoodalProvider from "./Contexts/ModalContext";

function App() {
  return (
    <AuthProvider>
      <MoodalProvider>
        <GlobalStyles />
        <RoutesMain />
      </MoodalProvider>
    </AuthProvider>
  );
}

export default App;
