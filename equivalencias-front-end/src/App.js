import PageIniciarSesion from './components/organisms/IniciarSesion/PageIniciarSesion';
import { PageCreateForm } from './PageCreateForm';
import { PageRevision } from './components/organisms/Direccion/PageRevision';
import { PageMyForm } from './PageMyForm';
import { PagePerfil } from './components/organisms/Alumno/PagePerfil';
import { PageDireccion } from './components/organisms/Direccion/PageDireccion';
import { PageVerEquivalencia } from './components/organisms/Alumno/PageVerEquivalencia';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <Router>
                <Route path="/" exact component={PageIniciarSesion} />
                <Route path="/usuario/equivalencias" component={PageMyForm} />
                <Route
                    path="/usuario/visualizar/:id"
                    component={PageVerEquivalencia}
                />
                <Route path="/usuario/formulario" component={PageCreateForm} />
                <Route
                    path="/direccion/solicitudes"
                    component={PageDireccion}
                />
                <Route
                    path="/direccion/revision/:id"
                    component={PageRevision}
                />
            </Router>

            <ToastContainer
                containerId={'Toastify'}
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
