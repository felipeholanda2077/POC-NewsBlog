import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* layout, nav, etc */}
      <Outlet /> {/* Renderiza o conteúdo da rota filha */}
    </div>
  );
}

export default App;
