import { StringsCotextProvider } from 'providers/StringsCotextProvider';
import AppRoutes from 'routes/AppRoutes';

function App() {
  return (
    <StringsCotextProvider>
      <AppRoutes />
    </StringsCotextProvider>
  );
}

export default App;
