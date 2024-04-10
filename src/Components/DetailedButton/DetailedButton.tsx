import {Button} from 'react-bootstrap';
import './DetailedButton.css';


export default function DetailedButton({page, setPage}: {page:string; setPage: (newPage: string) => void}): JSX.Element {
    //passed state as props to button component so that detailed page could be rendered on click
    return (
        <div>
            <Button style= {{backgroundColor: 'rgb(104 35 255'}} onClick={() => setPage("Detailed")}>Take Quiz!</Button>
        </div>
    )
}