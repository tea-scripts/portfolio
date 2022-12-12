import Landing from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import { Navbar, Sidebar } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
