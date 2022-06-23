import React from 'react';
import './App.css';
import BarraNavegacion from './app/components/BarraNavegacion';
import PiePagina from './app/components/PiePagina';

function App() {
	return (
		<div className="contenedor">
			<header>
				<BarraNavegacion />
			</header>
			<img
				src="https://www.svgrepo.com/show/421960/app-hour-interface.svg"
				style={{ width: '33%', color: '#00ff00' }}
			/>
			<p>
				Paleta de colores
				<input type="color" name="" id="" value={'#F2668B'} disabled />{' '}
				<input type="color" name="" id="" value={'#025E73'} disabled />{' '}
				<input type="color" name="" id="" value={'#011F26'} disabled />{' '}
				<input type="color" name="" id="" value={'#026873'} disabled />{' '}
				<input type="color" name="" id="" value={'#03A688'} disabled /> Fuente "Geo Sans Light"
			</p>
			<span>
				Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
				el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
				que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
				hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de
				relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los
				60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
				recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones
				de Lorem Ipsum.
			</span>
			<img src="https://www.svgrepo.com/show/421960/app-hour-interface.svg" style={{ width: '33%' }} />
			<footer>
				<PiePagina />
			</footer>
		</div>
	);
}

export default App;
