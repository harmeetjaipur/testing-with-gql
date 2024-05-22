import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={"hello world!"} />
      </Routes>
    </Router>
  );
};

export default App;
