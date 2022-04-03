import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home } from '../pages/Home'
import { DesignSystem } from '../pages/DesignSystem'

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </HashRouter>
  );
}

