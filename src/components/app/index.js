import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../layout";

import Home from "../home";
import Posts, { PostAt } from '../posts';
import Competitions from '../competitions';
import GitHub from '../github';
import Workshops from '../workshops';

import Error from '../error';

export default function App(props) {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/:postNumber" component={PostAt} exact />
        <Route path="/competitions" component={Competitions} exact />
        <Route path="/github" component={GitHub} exact />
        <Route path="/workshops" component={Workshops} exact />
        <Route component={Error} />
      </Switch>
    </Layout>
  );
}
