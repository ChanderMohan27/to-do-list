import { CAlert,CCard, CCardImage,CCardBody,CCardTitle,CCardText,CButton } from '@coreui/react';


const Cards = (props)=> {
    return(
        <div className='container'>
        <CCard style={{ width: '18rem' }}  >
        <h5>{props.number}</h5>
        <CCardImage orientation="top" src= {props.image}/>
        <CCardBody>
            <CCardTitle>{props.title}</CCardTitle>
            <CCardText>
            {props.description}
                        
            </CCardText>
            
        </CCardBody> 
        </CCard>
        </div>
    )
}
   
export default Cards