import logo from './logo.svg';
import './App.css';
import Layout from './components/common/Layout';
import Dashboard from './components/Dashboard';
import PatientInfo from './components/PatientInfo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Layout>
      <Router>
      
        {/* Define routes here */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:12" element={<PatientInfo />} />
        </Routes>
      
    </Router>
        {/* <Dashboard/>
        <PatientInfo/> */}
      </Layout>
    </div>
  );
}

export default App;
