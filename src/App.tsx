import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { UniversoPage } from './pages/UniversoPage';
import { BibliotecaPage } from './pages/BibliotecaPage';
import { ForjaPage } from './pages/ForjaPage';
import { ArmazemPage } from './pages/ArmazemPage';
import { ConexoesPage } from './pages/ConexoesPage';
import { SobrePage } from './pages/SobrePage';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <BrowserRouter basename="/cygni/">''
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="universo" element={<UniversoPage />} />
          <Route path="biblioteca" element={<BibliotecaPage />} />
          <Route path="forja" element={<ForjaPage />} />
          <Route path="armazem" element={<ArmazemPage />} />
          <Route path="conexoes" element={<ConexoesPage />} />
          <Route path="sobre" element={<SobrePage />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#050505', border: '1px solid rgba(246, 113, 1, 0.3)', color: '#FDFCF7' } }} />
    </BrowserRouter>
  );
}

export default App;
