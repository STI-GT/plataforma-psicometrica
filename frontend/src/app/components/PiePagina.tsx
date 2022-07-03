import React from 'react';
import { Link } from 'react-router-dom';

interface props {
	pie: string | undefined;
}
function PiePagina({ pie }: props) {
	return (
		<nav
			className="barra-navegacion-pie"
			style={{
				background: `${pie}`
			}}
		>
			<ul className="navegacion-pie">
				<li className="enlace-navegacion">
					<Link className="" to={'/Nosotros'}>
						Plataforma Psicometrica Integral
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/T&C'}>
						Terminos y condiciones
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/Privacidad'}>
						Acuerdo de privacidad
					</Link>
				</li>
			</ul>

			<ul className="navegacion-pie">
				<li className="enlace-navegacion">
					<Link className="" to={'/Contacto'}>
						Contacto
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/API'}>
						Instagram
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/API'}>
						Facebook
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/API'}>
						copyright
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default PiePagina;
