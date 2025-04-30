import Dashboard from './components/Dashboard';
import MainLayout from './components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="container">
        <Dashboard />
      </div>
    </MainLayout>
  );
}
