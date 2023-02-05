import React from 'react'
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const FormComp = ({confirmarCompra, formVis, setFormVis}) => {

  

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (formData) => {
        confirmarCompra(formData)
      }; // your form submit function which will invoke after successful validation
    
      const handleClose = () =>{
        setFormVis(false);
      }
    
      return (
        <>
      <Modal show={formVis} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="mb-3">
              <label className='form-label fw-bolder'>Nombre</label>
              <input className='form-control'
              {...register("nombre", {
                required: true,
                minLength: 2
              })}
              />
              {errors?.nombre?.type === "required" && <p>El campo nombre es requerido.</p>}
              {errors?.nombre?.type === "minLength" && (
                <p>El nombre debe superar los dos caracteres.</p>
              )}
            </div>
            <div className="mb-3">
              <label className='form-label fw-bolder'>Correo</label>
              <input className='form-control' type={'email'} {...register("email", { minLength : 3, required: true})} />
              {errors?.email?.type === "required" && <p>El campo email es requerido.</p>}
              {errors?.email?.type === "minLength" && (
                <p>El email debe tener como minimo tres caracteres.</p>
              )}
            </div>
            <div className="mb-3">
              <label className='form-label fw-bolder'>Telefono</label>
              <input className='form-control' type={'number'} {...register("telefono", { minLength: 10, maxLength: 10,required:true })} />
              {errors?.telefono?.type === "required" && <p>El campo telefono es requerido.</p>}
              {errors?.telefono?.type ==="minLength" && (
                <p>El telefono debe tener diez digitos.</p>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
            Confirmar compra.
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
        
      );
}

export default FormComp