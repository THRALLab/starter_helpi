import purpleLI from './pLinkedIn.png'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';


function OliviaLinkedIn():JSX.Element {
  return (
    <div>
      <Link to="https://www.linkedin.com/in/olivia-karney/">
                
                <Button style={{ background: '#c3b1e1', height: 50, width: 50 }} type="button">
                <img src={purpleLI} alt="logo" style={{ height: 30, width: 30}} />
                </Button>
      </Link>
  </div>
  );
}

// function KhadijaLinkedIn():JSX.Element {
//   return (
//     <div>
//       <Link to="https://www.linkedin.com/in/khadija-mohammadi-3ab7892ab/">
                
//                 <Button style={{ background: '#c3b1e1', height: 50, width: 50 }} type="button">
//                 <img src={purpleLI} alt="logo" style={{ height: 30, width: 30}} />
//                 </Button>
//       </Link>
//   </div>
//   );
// }

// function ZahraLinkedIn():JSX.Element {
//     return (
//       <div>
//         <Link to="https://www.linkedin.com/in/zahra-temori/">
                  
//                   <Button style={{ background: '#c3b1e1', height: 50, width: 50 }} type="button">
//                   <img src={purpleLI} alt="logo" style={{ height: 30, width: 30}} />
//                   </Button>
//         </Link>
//     </div>
//     );
//   }

// function JacobLinkedIn():JSX.Element {
//   return (
//     <div>
//       <Link to="https://www.linkedin.com/in/jacob-whitman-b22952228/">
                
//                 <Button style={{ background: '#c3b1e1', height: 50, width: 50 }} type="button">
//                 <img src={purpleLI} alt="logo" style={{ height: 30, width: 30}} />
//                 </Button>
//       </Link>
//   </div>
//   );
// }

export {OliviaLinkedIn};//, KhadijaLinkedIn, ZahraLinkedIn, JacobLinkedIn};
