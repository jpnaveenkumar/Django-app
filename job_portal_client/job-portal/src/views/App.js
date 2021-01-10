import './css/App.css';
import Header from '../components/Header.js';
import JobListing from '../components/JobListing';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <JobListing></JobListing>
    </div>
  );
}

export default App;
