import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
      <div id="colorlib-page">
        <Helmet>
          <title>Leonard Lim</title>
        </Helmet>
        <div id="container-wrap">
          {/*<Sidebar></Sidebar>*/}
          <div id="colorlib-main">
              <p> hi</p>
            {/*<Introduction></Introduction>*/}
            {/*<About></About>*/}
            {/*<Timeline></Timeline>*/}
            {/*<Projects></Projects>*/}
          </div>
        </div>
      </div>
  );
}

export default App;
