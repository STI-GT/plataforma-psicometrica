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
					<Link className="" to={'/'}>
						Plataforma Psicometrica Integral
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="" to={'/Nosotros'}>
						Acerca de
					</Link>
				</li>
				<li className="enlace-navegacion copy">&copy; 2022</li>
			</ul>

			<ul className="navegacion-pie">
				<li className="enlace-navegacion">
					<Link className="" to={'/Privacidad'}>
						Aviso de privacidad
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="enlace-navegacion" to={'/Privacidad'}>
						Acuerdo de privacidad
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="enlace-navegacion" to={'/Privacidad'}>
						Terminos de uso
					</Link>
				</li>
			</ul>

			<ul className="navegacion-pie">
				<li className="enlace-navegacion">
					<Link className="enlace-navegacion" to={'/Contacto'}>
						Contacto
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="enlace-navegacion" to={'/API'}>
						<img src="/assets/media/instagram.svg" alt="instagram link" />
					</Link>
				</li>
				<li className="enlace-navegacion">
					<Link className="enlace-navegacion" to={'/API'}>
						<img src="/assets/media/facebook.svg" alt="facebook link" />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default PiePagina;
