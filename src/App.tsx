import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CreatePage from "./containers/CreatePage";
import ErrorPage from "./containers/ErrorPage";
import HomePage from "./containers/HomePage";
import ItemDetailsPage from "./containers/ItemDetailsPage";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/details/:id" component={ItemDetailsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
