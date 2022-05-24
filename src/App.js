import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/layout/Layout";
import Home from "./components/UI/home/Home";
import Speakers from "./components/UI/speakers/Speakers";
import Sponsors from "./components/UI/sponsors/Sponsors";
import Gallery from "./components/UI/gallery/Gallery";
import ContactUs from "./components/UI/contactUs/ContactUs";
import UpComingEevents from "./components/UI/upComingEevents/UpComingEevents";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/upComingEevents'>
            <UpComingEevents />
          </Route>
          <Route path='/speakers'>
            <Speakers />
          </Route>
          <Route path='/sponsors'>
            <Sponsors />
          </Route>
          <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/contactUs'>
            <ContactUs />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
};

export default App;
