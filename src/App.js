import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Search from './components/Search';

import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchSearch() {
      let res = await fetch('https://swapi.dev/api/people/?search=r');
      let data = await res.json();
      setSearch(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchSearch();
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/people">
                  <People data={people} />
                </Route>
                <Route exact path="/search">
                  <Search />
                </Route>
              </Switch>
            )}
        </Container>
      </Router>
    </>
  );
}

export default App;
