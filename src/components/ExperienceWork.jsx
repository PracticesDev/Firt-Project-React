import React from 'react'
import { useForm } from '../hook/useForm';

export const ExperienceWork = ({onFormSubmitWork}) => {

    const { company, position, responsibilities, onInputChange, onResetForm } = useForm({
        company: '',
        position: '',
        responsibilities: '',
    })

    const dataFormWork = (event) => {
        event.preventDefault();
        onFormSubmitWork({ company, position, responsibilities });
        onResetForm();
    }

    return (
        <>
            <div>
                <form className='mt-2 p-2' onSubmit={dataFormWork}>
                    <div className="mb-3">
                        <label className="form-label"><strong>Nombre de la empresa</strong></label>
                        <input
                            type="name"
                            className="form-control"
                            placeholder='Nombre de la empresa'
                            name='company'
                            value={company}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><strong>Titulo del puesto de trabajo</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Titulo del puesto de trabajo'
                            name='position'
                            value={position}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><strong>Resposabilidades</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='resposabilidades'
                            name='responsibilities'
                            value={responsibilities}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button
                            type="submit"
                            className="btn btn-outline-secondary">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
