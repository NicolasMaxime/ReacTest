import {Button, Card} from "react-bootstrap";
import './deletableCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TrashFill} from "react-bootstrap-icons";

const DeletableCard = (
    {
        id = '',
        title = 'default title',
        subtitle = 'default subtitle',
        text =  'default biooooooooooooooooooooooooooooooography',
        removeCard = (arg: any) => { },
    }) => {

    return <div>
        <Card
            className={'cardGlobal text-white'}
            bg={'dark'}
        >
            <Card.Header className={'cardHeader'}>{title}</Card.Header>
            <Card.Body className={'cardBody'}>
                <Card.Title>{subtitle}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
            <Card.Footer className={'cardFooter'}>
                <Button variant='' onClick={() => removeCard(id)}>
                    <TrashFill ></TrashFill>
                </Button>
            </Card.Footer>
        </Card>
    </div>
}
export default DeletableCard;
