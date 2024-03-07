import { useState } from 'react'
import { InformationPerson, ProfessionalExperience, ExperienceWork } from './components'

export const CvApp = () => {

    const [data, setData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
    });
    const [dataExperience, setDataExperience] = useState({
        institution: '',
        qualification: '',
        year: '',
    });
    const [dataWork, setDataWork] = useState({
        company: '',
        position: '',
        responsibilities: '',
    });

    const handleFormSubmit = (formData) => {
        setData(formData)
    };
    const handleFormSubmitExperience = (formDataExperience) => {
        setDataExperience(formDataExperience)
    };
    const handleFormSubmitWork = (formDataWork) => {
        setDataWork(formDataWork)
    };

    return (
        <>
            <nav className="navbar p-3 mb-3 bg-danger">
                <div className="container-fluid">
                    <h1 className="navbar-brand mb-0 h1 text-white"> CV - APP</h1>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card border-secondary">
                            <div className="card-body">
                                <h1>Información General</h1>
                                <div className="card border-secondary">
                                    <InformationPerson onFormSubmit={handleFormSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card border-secondary">
                            <div className="card-body">
                                <h1>Experiencia Profesional</h1>
                                <div className="card border-secondary">
                                    <ProfessionalExperience onFormSubmitExperience={handleFormSubmitExperience} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card border-secondary">
                            <div className="card-body">
                                <h1>Experiencia Laboral</h1>
                                <div className="card border-secondary">
                                    <ExperienceWork onFormSubmitWork={handleFormSubmitWork} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-secondary">
                        <div className='card p-3'>
                            <h1 className='text-center'>Curriculum Vitae</h1>
                            <div className="card border-secondary">
                                <h4>INFORMACION PERSONAL</h4>
                                <label className="form-label"> Nombre: <strong>{data.nombre}</strong></label>
                                <label className="form-label ">Correo electrónico: <strong>{data.correo}</strong> </label>
                                <label className="form-label">Telefono: <strong>{data.telefono}</strong> </label>
                                <hr />
                                <h4>EXPERIENCIA PROFESIONAL</h4>
                                <label className="form-label"> Nombre institución: <strong>{dataExperience.institution}</strong></label>
                                <label className="form-label ">Título  Obtenido: <strong>{dataExperience.qualification}</strong> </label>
                                <label className="form-label">Fecha de Estudio: <strong>{dataExperience.year}</strong> </label>
                                <hr />
                                <h4>EXPERIENCIA LABORAL</h4>
                                <label className="form-label"> Nombre Empresa: <strong>{dataWork.company}</strong></label>
                                <label className="form-label ">Título  del puesto de trabajo: <strong>{dataWork.position}</strong> </label>
                                <label className="form-label">Responsabilidad: <strong>{dataWork.responsibilities}</strong> </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
