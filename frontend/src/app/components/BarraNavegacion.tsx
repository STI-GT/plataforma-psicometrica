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
				<li className="enlace-navegacion">
					<Link className="" to={'/Pruebas'}>
						Industrias cubiertas
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/InicioSesion'}>
						Inicio de sesion
					</Link>
				</li>
				<li className="enlace-navegacion">
					Español
					<img src="/assets/flags/es_gt.svg" alt="es_gt" />
				</li>
			</ul>
		</nav>
	);
}

export default BarraNavegacion;
