import { ListGroup } from 'react-bootstrap';

export default function ExperienceList({ items }) {
    return (
        <ListGroup variant="flush" className='w-100 d-grid px-1' style={{ gridAutoRows: "1fr" }}>
            {items.map(item => (
                <ListGroup.Item key={item.description} className='d-flex flex-row gap-4 px-1 py-4 align-items-center bg-transparent flex-fill'>
                    {item.icon && <img src={item.icon} alt={item.alt} style={{height: '3rem', width: '3rem'}} className='svg-shadow-sm' />}
                    <div className='flex-fill d-flex flex-column experience-content'>
                        <b>{item.description}</b>
                        <p>{item.period}</p>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}