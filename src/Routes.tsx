import { Route, Switch, useLocation } from "react-router-dom";
import CreatePage from "./containers/CreatePage";
import ErrorPage from "./containers/ErrorPage";
import HomePage from "./containers/HomePage";
import ItemDetailsPage from "./containers/ItemDetailsPage";
import links from "./helpers/links";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Routes = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames={"animate"} timeout={500}>
        <Switch location={location}>
          <Route exact path={links.create.pattern} component={CreatePage} />
          <Route
            exact
            path={links.itemDetails().pattern}
            component={ItemDetailsPage}
          />
          <Route exact path={links.home.pattern} component={HomePage} />
          <Route component={ErrorPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
