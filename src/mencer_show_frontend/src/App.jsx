import { useState } from 'react';
import { mencer_show_backend } from 'declarations/mencer_show_backend';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    mencer_show_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <img src="/logo2.svg" alt="DFINITY logo" />
              <br />
              <br />
              <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="name">Enter your name: &nbsp;</label>
                <input id="name" alt="Name" type="text" />
                <button type="submit">Click Me!</button>
              </form>
              <section id="greeting">{greeting}</section>
            </main>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
