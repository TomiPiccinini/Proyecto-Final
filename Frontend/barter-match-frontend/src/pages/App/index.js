import React from "react";
import { Route, Router, Switch, Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";
import history from "../../utils/history";
import Home from "../Home";
import Publicaciones from "../Publicaciones";
import Perfil from "../Perfil";
import Chat from "../Chats";

export const Container = styled.div`
  height: 95vh;
`;

const App = () => {
  return (
      <Container>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to={{ pathname: "/home" }} />
            </Route>
            <Route exact path="/home" component={withRouter(Home)} />
            <Route exact path="/publicaciones" component={withRouter(Publicaciones)} />
            <Route exact path="/perfil" component={withRouter(Perfil)} />
            <Route exact path="/chats" component={withRouter(Chat)} />
          </Switch>
        </Router>
      </Container>
  );
};

export default App;