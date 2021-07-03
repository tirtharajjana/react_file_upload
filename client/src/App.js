import FileUpload from './components/FileUpload';
import './App.css';

function App() {
  return (
    <div className="container mt-4">
      <h4 className="display-4 mb-4 text-center">
        <i className="fab fa-react"></i>React File Upload
      </h4>

      <FileUpload />
    </div>
  );
}

export default App;
