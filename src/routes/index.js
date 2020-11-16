import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import TodoList from "../components/CRUD/TodoList";

const TitlePage = lazy(() => import("../components/TitlePage"));
const Home = lazy(() => import("./Home"));
const Catalog = lazy(() => import("../components/Catalog"));
const Cars = lazy(() => import("../components/Mercedes/Mercedes"));
const Eclass = lazy(() => import("../components/Mercedes/e-class/Eclass"));
const W124 = lazy(() => import("../components/Mercedes/e-class/W124"));
const Engine = lazy(() => import("../components/Mercedes/e-class/Engine"));
const Blog = lazy(() => import("../components/Blog"));
const Audi = lazy(() => import("../components/Audi/Audi"));
const M102 = lazy(() => import("../components/Mercedes/e-class/m102"));
const News = lazy(() => import("../components/Newsline"));




export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense>
        <Switch>
          <Route exact path="/title">
            <Suspense fallback={<div></div>}>
              <TitlePage />
            </Suspense>
          </Route>

          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>

          <Route path="/todos" exact component={TodoList} />

          <Route exact path="/cars">
            <Layout>
              <Cars />
            </Layout>
          </Route>

          <Route exact path="/audi">
            <Layout>
              <Audi />
            </Layout>
          </Route>

          <Route exact path="/m102">
            <Layout>
              <M102 />
            </Layout>
          </Route>

          <Route exact path="/news">
            <Layout>
              <News/>
            </Layout>
          </Route>

          <Route exact path="/eclass">
            <Layout>
              <Eclass />
            </Layout>
          </Route>

          <Route exact path="/w124">
            <Layout>
              <W124 />
            </Layout>
          </Route>

          <Route exact path="/engine">
            <Layout>
              <Engine />
            </Layout>
          </Route>

          <Route exact path="/blog">
            <Layout>
              <Blog />
            </Layout>
          </Route>

          <Route exact path="/catalog">
            <Layout>
              <Catalog />
            </Layout>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
