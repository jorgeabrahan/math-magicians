// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router';
import Home from './routes/Home/index';
import Calculator from './routes/Calculator/index';
import Quote from './routes/Quote/index';
import Navbar from './NavBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Route>
    </Routes>
  );
}

export default App;
