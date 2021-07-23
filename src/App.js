import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Search from './components/Search';
//import Datatable from '../datatable/index.jsx'
import './App.css';

function App() {
  //const [state, setState] = useState([]);
  const [people, setPeople] = useState('');
  const [loading, setLoading] = useState([true]);
  const [search, setSearch] = useState([false]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
    }

    fetchPeople();
    //fetchSearch();
    setLoading(false);
  }, [])
  console.log('data', people);
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
                {/* <Route exact path="/search">
                  <Search data={search} />
                </Route> */}
              </Switch>
            )}
        </Container>
      </Router>
      
    </>
  );
}

export default App;
