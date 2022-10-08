import { Route, Switch, useLocation } from "react-router-dom";
import CreatePage from "./containers/CreatePage";
import ErrorPage from "./containers/ErrorPage";
import HomePage from "./containers/HomePage";
import ItemDetailsPage from "./containers/ItemDetailsPage";
import links from "./helpers/links";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const RenderRoutes = () => {
  const location = useLocation();

  const routes = [
    {
      path: links.create.pattern,
      key: "create_page",
      exact: true,
      component: CreatePage,
    },
    {
      path: links.itemDetails().pattern,
      key: "item_details_page",
      exact: true,
      component: ItemDetailsPage,
    },
    {
      path: links.home.pattern,
      key: "home_page",
      exact: true,
      component: HomePage,
    },
    {
      key: "error_page",
      component: ErrorPage,
    },
  ];

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames={"animate"} timeout={500}>
        <Switch location={location}>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RenderRoutes;
