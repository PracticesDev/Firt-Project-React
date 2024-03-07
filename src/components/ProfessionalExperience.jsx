import React from 'react'
import { useForm } from '../hook/useForm';

export const ProfessionalExperience = ({onFormSubmitExperience}) => {

    const { institution, qualification, year , onInputChange, onResetForm } = useForm({
        institution: '',
        qualification: '',
        year: '',
    })

    const dataFormExperience = (event) => {
        event.preventDefault();
        onFormSubmitExperience({ institution, qualification, year });
        onResetForm();
    }

    return (
        <>
            <div >
                <form className='mt-2 p-2' onSubmit={dataFormExperience}>
                    <div className="mb-3">
                        <label className="form-label" ><strong>Nombre institucion</strong></label>
                        <input
                            type="name"
                            className="form-control"
                            placeholder='Nombre institucion' 
                            name='institution'
                            value={institution}
                            onChange={onInputChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><strong>Titulo Obtenido</strong></label>
                        <input
                            type="name"
                            className="form-control"
                            placeholder='Titulo obtenido'
                            name='qualification'
                            value={qualification}
                            onChange={onInputChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><strong>Fecha de Estudio</strong></label>
                        <input
                            type="date"
                            className="form-control" 
                            placeholder='year '
                            name='year'
                            value={year} 
                            onChange={onInputChange}
                            />
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="submit" className="btn btn-outline-secondary">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
