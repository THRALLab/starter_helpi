import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { SimpleQuestions } from './SimpleQuestions';
import DetailedQuestions from './DetailedQuestions';
import SimpleReport from './SimpleReport';
import DetailedReport from './DetailedReport';

function RoutePaths() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="detailedquestions" element={<DetailedQuestions />}/>
        <Route path="simplequestions" element={<SimpleQuestions />}/>
        <Route path="simplereport" element={<SimpleReport />}/>
        <Route path="detailedreport" element={<DetailedReport />}/>
      </Routes>
  );
}

export default RoutePaths;