import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { SimpleQuestions } from "../Pages/SimpleQuestions";
import DetailedQuestions from "../Pages/DetailedQuestions";
import SimpleReport from "../Pages/SimpleReport";
import DetailedReport from "../Pages/DetailedReport";

function RoutePaths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detailedquestions" element={<DetailedQuestions />} />
      <Route path="simplequestions" element={<SimpleQuestions />} />
      <Route path="simplereport" element={<SimpleReport />} />
      <Route path="detailedreport" element={<DetailedReport />} />
    </Routes>
  );
}

export default RoutePaths;
