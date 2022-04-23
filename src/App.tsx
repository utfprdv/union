import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Layout from "./Layout/Layout";
import routes from "./Pages/routes";
import store from "./Store/store";
import { theme } from "Theme/theme";

const App = () => {
  const router = useRoutes(routes);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>{router}</Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
