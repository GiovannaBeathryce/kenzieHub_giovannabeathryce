import React from "react";
import RoutesMain from "./Routes";
import { GlobalStyles } from "./GlobalSyles";
import MoodalProvider from "./Contexts/ModalContext";
import AuthProvider from "./Contexts/AuthContext";

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
