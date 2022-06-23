import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';

function PiePagina() {
	return (
		<nav className="barra-navegacion">
			<ul className="navegacion-pagina">
				<li className="enlace-navegacion">
					<Button className="btn">Pagina principal PPI</Button>
				</li>
				<li className="enlace-navegacion">
					<Button className="btn">Nuestros servicios</Button>
				</li>
				<li className="enlace-navegacion">
					<Button className="btn">Inicio de candidatos</Button>
				</li>
			</ul>

			<ul className="navegacion-cuenta">
				<li className="enlace-navegacion">
					<Button className="btn">Inicio de candidatos</Button>
				</li>
				<li className="enlace-navegacion">
					<Button className="btn">Inicio de administradores</Button>
				</li>
			</ul>
		</nav>
	);
}

export default PiePagina;
