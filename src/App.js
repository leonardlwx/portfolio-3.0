import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'

function App() {
  return (
      <div id="colorlib-page">
        <Helmet>
          <title>Leonard Lim</title>
        </Helmet>
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            {/*<Projects></Projects>*/}
          </div>
        </div>
      </div>
  );
}

export default App;
