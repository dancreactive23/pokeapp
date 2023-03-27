import React from 'react';
import {Modal,Button} from 'react-bootstrap';


const ModalPoke = ({modalDetails,show,handleClose}) =>{

    const {base_experience ,height,id,name,weight} = modalDetails;
    
    return (
        <>
        <Modal show={show} onHide={handleClose} className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
            <Modal.Header closeButton className='text-center poke-bg poke-font text-uppercase border-dark'>
            <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-light border-black'>
                <div className='container-fluid mb-3'>
                        <div className='text-center mb-4'>
                            <img style={{width:'120px',height:'120px',border:'none'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`} alt='...'/>
                        </div>
                    <div className='row text-center'>
                        <div className='col-4'>
                            <h5 className='mb-3 fw-bold badge fs-5' style={{backgroundColor:'#3860be'}}>Properties</h5>
                            <ul className='list-group'>
                                <li className='list-group-item p-0 mb-2'>Experience: {base_experience}</li>
                                <li className='list-group-item p-0 mb-2'>Height: {height}</li>
                                <li className='list-group-item p-0 mb-2'>Weight: {weight}</li>
                            </ul>
                        </div>
                        <div className='col-4'>    
                            <h5  className='mb-3 fw-bold badge fs-5' style={{backgroundColor:'#3860be'}}>Abilities</h5>
                            {
                                    modalDetails.abilities.map((skill,index) =>{
                                    return(
                                        <ul className='list-group' key={index}>
                                            <li className='list-group-item p-0 mb-2' key={index}> {skill.ability.name}</li>
                                        </ul>
                                                
                                    )
                                })
                            }
                                
                            
                        </div>
                        <div className='col-4'>
                        <h5  className='mb-3 fw-bold badge fs-5' style={{backgroundColor:'#3860be'}}>Types</h5>
                            {
                                modalDetails.types.map((kind,index) =>{
                                    return(
                                        <ul className='list-group' key={index}>
                                            <li className='list-group-item p-0 mb-2' key={index}>{kind.type.name}</li>
                                        </ul>
                                                
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='border-black bg-gradient'>
            <Button variant="secondary" className='bg-transparent text-secondary' onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" style={{backgroundColor:'#3860be' ,border:'#3860be'}} onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};


export default ModalPoke;