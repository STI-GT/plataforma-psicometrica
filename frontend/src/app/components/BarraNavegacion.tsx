import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface props {
	encabezado: string | undefined;
}

function BarraNavegacion({ encabezado }: props) {
	return (
		<nav
			className="barra-navegacion"
			style={{
				background: `${encabezado}`
			}}
		>
			<ul className="navegacion-pagina">
				<li className="enlace-navegacion">
					<Link className="item-navegacion" to={'/'}>
						Pagina principal PPI
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/Servicios'}>
						Nuestros servicios
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/Pruebas'}>
						Nuestras pruebas
					</Link>
				</li>
			</ul>

			<ul className="navegacion-cuenta">
				<li className="enlace-navegacion">
					<Link className="" to={'/InicioSesion'}>
						Inicio de candidatos
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/InicioSesion'}>
						Inicio de administradores
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default BarraNavegacion;
