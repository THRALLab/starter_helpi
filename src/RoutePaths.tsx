import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import DetailedQuestions from './DetailedQuestions';
import Home from './Home';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
//let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  //keyData = JSON.parse(prevKey);
}

function RoutePaths() {
  //const [key, setKey] = useState<string>(keyData); //for api key input
  //sets the local storage item to the api key the user inputed
  /*function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }*/

  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="detailedquestions" element={<DetailedQuestions />}/>
        </Routes>
      </>
  );
}

export default RoutePaths;