import { BrowserRouter as Router } from "react-router-dom";
import { LayoutWrapper } from "./components/layout/layoutStyled";
import Routes from "./Routes";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <LayoutWrapper>
      <Router>
        <Routes />
      </Router>
    </LayoutWrapper>
  );
};

export default App;
