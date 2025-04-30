import CSVProcessor from '../components/CSVProcessor';
import MainLayout from '../components/MainLayout';

export default function CSVProcessorPage() {
  return (
    <MainLayout>
      <div className="container">
        <CSVProcessor />
      </div>
    </MainLayout>
  );
}
