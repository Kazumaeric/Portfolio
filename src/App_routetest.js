import React from 'react';
import './App.css';
import Landingpage from './components/landingpage.js';
import Resume from './components/resume.js';
import Aboutme from './components/aboutme.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Route style={{textDecoration: 'none',color: 'white'}} path="/" exact component={ Landingpage }>我的作品集</Route>} scroll>
                <Navigation>
                    <Route path="/resume" exact component={ Resume }></Route>
                      <Route path="/aboutme" exact component={ Aboutme }></Route>
                      <Route path="/projects" exact component={ Projects }></Route>
                      <Route path="/Contact" exact component={ Contact }></Route>
                </Navigation>
            </Header>
             <Drawer title={<Route style={{textDecoration: 'none',color: 'grey'}} to="/">我的作品集</Route>}>
                            <Navigation>
                    <Route path="/resume" exact component={ Resume }></Route>
                      <Route path="/aboutme" exact component={ Aboutme }></Route>
                      <Route path="/projects" exact component={ Projects }></Route>
                      <Route path="/Contact" exact component={ Contact }></Route>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                            <Main/>
                        </Content>
        </Layout>
      </div>
      
    </BrowserRouter>
  );
}


// function App() {
//   return (
//     <div className="demo-big-content">
//         <Layout>
//             <Header className="header-color" title={<Link style={{textDecoration: 'none',color: 'white'}} to="/">我的作品集</Link>} scroll>
//                 <Navigation>
//                     <Link to="/resume">Resume</Link>
//                     <Link to="/aboutme">Aboutme</Link>
//                     <Link to="/projects">Projects</Link>
//                     <Link to="/contact">Contact</Link>
//                 </Navigation>
//             </Header>
//             <Drawer title={<Link style={{textDecoration: 'none',color: 'grey'}} to="/">我的作品集</Link>}>
//                 <Navigation>
//                     <Link to="/resume">Resume</Link>
//                     <Link to="/aboutme">Aboutme</Link>
//                     <Link to="/projects">Projects</Link>
//                     <Link to="/contact">Contact</Link>
//                 </Navigation>
//             </Drawer>
//             <Content>
//                 <div className="page-content" />
//                 <Main/>
//             </Content>
//         </Layout>
//     </div>
//   );
// }

export default App;
