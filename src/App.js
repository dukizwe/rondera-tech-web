import logo from './logo.svg';
import './css/app/app.scss';
import Header from './components/templates/Header';
import HomeBanner from './components/HomeBanner';
import TechCounts from './components/TechCounts';
import Features from './components/Features';
import { Footer } from './components/Footer';

function App() {
          return (
                    <div className="site-container">
                              <Header />
                              <HomeBanner />
                              <TechCounts />
                              <Features />
                              <Footer />
                    </div>
          );
}

export default App;
