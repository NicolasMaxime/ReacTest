import {Button, Card} from "react-bootstrap";
import './deletableCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {PencilFill, TrashFill} from "react-bootstrap-icons";

const DeletableCard = (
    {
        id = '',
        title = 'default title',
        subtitle = 'default subtitle',
        text =  'default biooooooooooooooooooooooooooooooography',
        removeCard = (arg: any) => { },
        editCard = () => {}
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
                <div className={'cardFooterButton'}>
                    <Button variant='' onClick={() => {editCard()}}>
                        <PencilFill ></PencilFill>
                    </Button>
                    <Button variant='' onClick={() => removeCard(id)}>
                        <TrashFill ></TrashFill>
                    </Button>
                </div>
            </Card.Footer>
        </Card>
    </div>
}
export default DeletableCard;
