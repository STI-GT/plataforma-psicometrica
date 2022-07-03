import React from 'react';
import { useState } from 'react';
import './App.css';
import BarraNavegacion from './app/components/BarraNavegacion';
import PiePagina from './app/components/PiePagina';

function App() {
	const [ encabezado, setEncabezado ] = useState('#ffaadd');
	const [ pie, setPie ] = useState('#ffdddd');
	const [ fondo, setFondo ] = useState('#ffffff');
	const [ letra, setLetra ] = useState('Lucida Sans');
	const [ color, setColor ] = useState('#000000');
	const [ tamano, setTamano ] = useState('medium');

	const handleEncabezado = (e) => {
		setEncabezado(e.target.value);
		console.log(e.target.value);
	};
	const handlePie = (e) => {
		setPie(e.target.value);
		console.log(e.target.value);
	};
	const handleFondo = (e) => {
		setFondo(e.target.value);
		console.log(e.target.value);
	};
	const handleLetra = (e) => {
		setLetra(e.target.value);
		console.log(e.target.value);
	};
	const handleColor = (e) => {
		setColor(e.target.value);
		console.log(e.target.value);
	};
	const handleTamano = (e) => {
		setTamano(e.target.value);
		console.log(e.target.value);
	};

	return (
		<main
			className="contenedor"
			style={{
				background: `${fondo}`,
				fontFamily: `${letra}`,
				backgroundColor: `${fondo}`,
				color: `${color}`,
				fontSize: `${tamano}`
			}}
		>
			<header>
				<BarraNavegacion encabezado={encabezado} />
			</header>
			<section>
				<section>
					{/* Color de encabezado de pagina */}
					<div>
						<label htmlFor="header-g1">Gradiente #1 encabezado</label>
						<input
							type="color"
							name="header-g1"
							id=""
							value={encabezado}
							color={encabezado}
							onChange={handleEncabezado}
						/>
					</div>

					<div>
						<label htmlFor="fondo1">Fondo de pagina</label>
						<input type="color" name="fondo1" id="" value={fondo} onChange={handleFondo} />
					</div>
					{/* Color de texto de la pagina */}
					<div>
						<label htmlFor="tColor">Texto negro</label>
						<input type="radio" name="tColor" id="tBlack" value={'#000000'} onChange={handleColor} />
						<label htmlFor="texto">Texto blanco</label>
						<input type="radio" name="tColor" id="tWhite" value={'#FFFFFF'} onChange={handleColor} />
					</div>

					{/* Tipo de fuente de la pagina */}
					<div>
						<input
							type="radio"
							name="fuente"
							id=""
							value={'Verdana'}
							onChange={handleLetra}
							defaultChecked={true}
						/>
						<label htmlFor="fuente">Fuente "Verdana"</label>
						<input type="radio" name="fuente" id="" value={'Lucida Sans'} onChange={handleLetra} />
						<label htmlFor="fuente">Fuente "Lucida sans"</label>
						<input type="radio" name="fuente" id="" value={'Segoe UI'} onChange={handleLetra} />
						<label htmlFor="fuente">Fuente "Segoe UI"</label>
						<input type="radio" name="fuente" id="" value={'Courier New'} onChange={handleLetra} />
						<label htmlFor="fuente">Fuente "Courier New"</label>
						<input type="radio" name="fuente" id="" value={'geo-sanslight'} onChange={handleLetra} />
						<label htmlFor="fuente">Fuente "Geo SansLight" descargada de internet</label>
					</div>
					{/*Tamano de letra*/}
					<div>
						<input type="radio" name="tamano" id="" value={'medium'} onChange={handleTamano} />
						<label htmlFor="fuente">Media</label>
						<input type="radio" name="tamano" id="" value={'large'} onChange={handleTamano} />
						<label htmlFor="fuente">XL</label>
						<input type="radio" name="tamano" id="" value={'x-large'} onChange={handleTamano} />
						<label htmlFor="fuente">XXL</label>
					</div>
				</section>
				<section>
					<p>
						Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
						ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
						del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
						de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
						que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
						igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las
						cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
						por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
					</p>
				</section>
				<aside>
					<img
						className="images"
						src="https://www.svgrepo.com/show/421960/app-hour-interface.svg"
						style={{ width: '33%' }}
					/>
					<img
						className="images"
						src="https://www.svgrepo.com/show/421960/app-hour-interface.svg"
						style={{ width: '33%' }}
					/>
					<img
						className="images"
						src="https://www.svgrepo.com/show/421960/app-hour-interface.svg"
						style={{ width: '33%' }}
					/>

					<p>
						Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
						ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
						del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
						de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
						que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
						igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las
						cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
						por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Aliquid ex minima nam! Sunt minus voluptatibus deserunt,
						dignissimos harum vitae sapiente quasi soluta incidunt consectetur inventore. Illo natus veniam
						iure in? Aliquid, eius itaque doloremque quos nisi dolores nihil. Veritatis eligendi debitis
						earum doloribus magni voluptatum aspernatur repellat voluptatem illo sapiente unde maxime,
						nostrum dolorem quasi velit soluta ea odio fugit.
					</p>
				</aside>
				<div>
					{/* Color del pie de pagina */}
					<label htmlFor="header-g2">Gradiente #2 pie pagina</label>
					<input type="color" name="header-g2" id="" value={pie} onChange={handlePie} />
				</div>
			</section>
			<footer>
				<PiePagina pie={pie} />
			</footer>
		</main>
	);
}

export default App;
