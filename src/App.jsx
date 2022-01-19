import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/Detail/:id" exact element={<Detail />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
