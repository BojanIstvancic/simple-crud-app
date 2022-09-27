import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LayoutWrapper } from "./components/layout/layoutStyled";
import CreatePage from "./containers/CreatePage";
import ErrorPage from "./containers/ErrorPage";
import HomePage from "./containers/HomePage";
import ItemDetailsPage from "./containers/ItemDetailsPage";
import links from "./helpers/links";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <LayoutWrapper>
      <Router>
        <Switch>
          <Route exact path={links.create.pattern} component={CreatePage} />
          <Route
            exact
            path={links.itemDetails().pattern}
            component={ItemDetailsPage}
          />
          <Route exact path={links.home.pattern} component={HomePage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </LayoutWrapper>
  );
};

export default App;
