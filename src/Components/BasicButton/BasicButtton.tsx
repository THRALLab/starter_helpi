import {Button} from 'react-bootstrap';
import './BasicButton.css';


export default function BasicButton({page, setPage}: {page:string; setPage: (newPage: string) => void}
//passed state as props so that the basic page could be rendered on click
): JSX.Element {
    return (
        <div>
            <Button onClick={() => setPage("Basic")}>Take Quiz!</Button>
        </div>
    )
}


