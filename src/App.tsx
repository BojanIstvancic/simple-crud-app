import PublicRoutes from "./router";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <PublicRoutes />
    </>
  );
};

export default App;
