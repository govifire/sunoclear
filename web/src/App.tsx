import "./less/index.less";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { AboutUs } from "./components/AboutUs";

const Home = lazy(() => /* webpackPrefetch: true */ import("./components/Home"));
const AboutUs = lazy(() => /* webpackPrefetch: true */ import("./components/AboutUs"));
const ContactUs = lazy(() => /* webpackPrefetch: true */ import("./components/ContactUs"));

function App() {
  return (
    <BrowserRouter>
     <Suspense fallback>
        <Switch>
          <Route component={Home} exact path={"/"} />
          <Route component={AboutUs} exact path={"/about-us"} />
          <Route component={ContactUs} exact path={"/contact-us"} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
