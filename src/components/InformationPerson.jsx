import { useForm } from "../hook/useForm";


export const InformationPerson = ({onFormSubmit}) => {

    const { nombre, correo, telefono, onInputChange, onResetForm } = useForm({
        nombre: '',
        correo: '',
        telefono: '',
    })

    const dataForm = (event) => {
        event.preventDefault();
        onFormSubmit({ nombre, correo, telefono });
        onResetForm();
    }

    return (
        <>

            <section>
                <div>
                    <form className='mt-2 p-2'  >
                        <div className="mb-3">
                            <label className="form-label"><strong>Nombre Completo</strong></label>
                            <input
                                type="name"
                                name="nombre"
                                value={nombre}
                                className="form-control"
                                placeholder='Nombre completo'
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><strong>Correo Electronico</strong></label>
                            <input
                                type="email"
                                name='correo'
                                value={correo}
                                className="form-control"
                                placeholder='Correo electronico'
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><strong>Numero Telefonico</strong></label>
                            <input
                                type="number"
                                name='telefono'
                                value={telefono}
                                className="form-control"
                                laceholder='Numero telefonico'
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <button onClick={dataForm} type="submit" className="btn btn-outline-secondary">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
