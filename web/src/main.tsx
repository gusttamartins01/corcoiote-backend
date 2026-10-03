import { createRoot } from 'react-dom/client';

const root = document.querySelector('div');

const App = () => <h1>Olá, Mundo!</h1>;

if (root !== null) createRoot(root).render(< App />);