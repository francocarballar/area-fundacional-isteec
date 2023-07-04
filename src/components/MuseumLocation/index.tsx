import { useState } from 'react'
import { Modal } from 'flowbite-react'

export function MuseumLocation ({
	children
}: {
	children: JSX.Element
}): JSX.Element {
	const [visible, setVisible] = useState<boolean>(false)

	return (
		<>
			<div
				className='absolute top-[42%] left-[70%] cursor-pointer'
				onClick={() => setVisible(true)}
			>
				{children}
			</div>
			<Modal dismissible show={visible} onClose={() => setVisible(false)}>
				<Modal.Header>Museo Área Fundacional</Modal.Header>
				<Modal.Body>
					<div className='space-y-6 text-gray-500 text-base'>
						<p>
							Este edificio es un museo de sitio, ya que es el resultado de la
							puesta en valor y preservación de los restos de antiguos
							edificios, y de sus cambios a lo largo del tiempo. En el mismo
							terreno, funcionaron otros tres establecimientos, que fueron muy
							importantes en la provincia. En 1607 se construyó el Cabildo de
							Mendoza, el cuál fue destruido durante el terremoto de 1861. En
							1877, se instaló en el mismo predio un matadero, que funcionó
							hasta 1927. Y Luego en el año 1940 se instaló en este solar la
							Feria o Mercado Municipal, que fue demolido en 1980. Finalmente,
							el 20 de febrero de 1993, en este sitio, se inauguró el Museo del
							Área Fundacional.
						</p>
						<p>
							Este es un museo arqueológico “de sitio e interpretación” y Su
							objetivo principal es proteger y exhibir los restos materiales
							hallados en el lugar, pertenecientes a nuestro patrimonio. En su
							interior se pueden apreciar excavaciones con vestigios de la
							antigua ciudad, cuenta con diseño expo gráfico para públicos con
							discapacidades motrices y visuales. Dentro de las piezas
							exhibidas, podemos encontrar:
						</p>
						<ul className='flex flex-col justify-start items-start gap-5 list-disc ml-6'>
							<li>
								<b>Ruinas arqueológicas:</b> Que incluyen los cimientos del piso
								del Cabildo, del Matadero y del Mercado Municipal.
							</li>
							<li>
								<b>Artefactos históricos:</b> Se exhibe una colección de
								artefactos arqueológicos y objetos históricos relacionados con
								la fundación y los primeros años de la ciudad. Por ejemplo
								herramientas, utensilios, fragmentos de cerámica y otros objetos
								de la época colonial.
							</li>
							<li>
								<b>Información histórica:</b> Proporciona información detallada
								sobre la fundación de la ciudad, la vida en la época colonial y
								la evolución histórica de Mendoza.
							</li>
							<li>
								<b>Exposiciones temáticas:</b> Que incluyen arte, fotografías,
								documentos históricos y otros elementos relacionados.
							</li>
						</ul>
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}
