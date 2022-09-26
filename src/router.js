import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CreatePage from "./containers/CreatePage";
import HomePage from "./containers/HomePage";
import ItemDetailsPage from "./containers/ItemDetailsPage";

const PublicRoutes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/details/:id" component={ItemDetailsPage} />
        </Switch>
      </Router>
    </>
  );
};

export default PublicRoutes;
