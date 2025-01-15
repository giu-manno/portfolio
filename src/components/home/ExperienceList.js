import { ListGroup } from 'react-bootstrap';

export default function ExperienceList({ items }) {
    return (
        <ListGroup variant="flush" className='d-grid w-100 h-100 px-1' style={{ gridAutoRows: "1fr" }}>
            {items.map(item => (
                <ListGroup.Item key={item.description} className='d-flex flex-row gap-4 px-1 py-4 align-items-center bg-transparent flex-fill'>
                    <img src={item.icon} alt={item.alt} className='svg-shadow-sm h-100' />
                    <div className='flex-fill d-flex flex-column'>
                        <b>{item.description}</b>
                        <p>{item.period}</p>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}