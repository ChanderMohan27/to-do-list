import Button from 'react-bootstrap/Button';

function Buttons({onDelete,color,title,todo}) {
  return (
    <div className='container'>
      <Button onClick={()=>{onDelete(todo)}} variant={color}>{title} </Button>{' '}
    </div>
  );
}

export default Buttons;