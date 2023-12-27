import {Navbar, Footer} from './components';
const App = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div className="h-screen border border-red-500">Intro</div>
      </header>
      <Footer />
    </div>
  );
};

export default App;
