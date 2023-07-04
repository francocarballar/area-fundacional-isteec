import { useState } from 'react'
import { Modal } from 'flowbite-react'

export function LeftLocation ({
	children,
	left
}: {
	children: JSX.Element
	left: number
}): JSX.Element {
	const [visible, setVisible] = useState<boolean>(false)

	return (
		<>
			<div
				style={{ left: `${left}px` }}
				className='absolute top-[25%] cursor-pointer'
				onClick={() => setVisible(true)}
			>
				{children}
			</div>
			<Modal dismissible show={visible} onClose={() => setVisible(false)}>
				<Modal.Header>Ruinas Jesuíticas de San Francisco</Modal.Header>
				<Modal.Body>
					<div className='space-y-6 text-gray-500 text-base'>
						<p>
							Este templo fue construido e inaugurado en 1731, frente a la plaza
							principal de la Ciudad, por la orden de los Jesuitas, quienes
							permanecieron allí hasta su expulsión en 1767. En 1798, pasó a
							manos de los franciscanos, siendo entonces refaccionado, ya que
							había sufrido daños por el terremoto de Santa Rita de 1782.
						</p>
						<p>
							Su construcción era de una gran belleza arquitectónica, realizada
							en piedra, cal y ladrillo. Poseía una gran nave con capillas
							laterales, crucero y presbiterio con un altar mayor dedicado a la
							Inmaculada Concepción.
						</p>
						<p>
							Desde este templo, en el año 1817, salió en procesión la imagen de
							Nuestra Señora del Carmen de Cuyo al encuentro del Ejército
							Libertador en la Plaza Mayor, para la ceremonia de su proclamación
							frente a la Iglesia Matriz.
						</p>
						<p>
							La iglesia sufrió daños irreparables durante el terremoto de 1861,
							luego del cuál se rescataron de entre los escombros: la imagen de
							la Virgen del Carmen de Cuyo, el bastón de mando del General San
							Martín, entregado por el prócer a la Orden Franciscana en 1818, y
							la Bandera del Ejército de los Andes, que también se hallaba
							guardada en el templo y que hoy es custodiada en el Memorial de la
							Bandera.
						</p>
						<p>
							Desde Mayo de 1995, se han desarrollado en el lugar trabajos de
							investigación, conservación y puesta en valor de las ruinas. En
							2013, se realizaron tareas de refuerzo y consolidación de las
							ruinas y se colocó un sistema de iluminación que destaca molduras,
							revoques originales, columnas y arcos.
						</p>
						<p>
							Las Ruinas de San Francisco fueron declaradas Monumento Histórico
							Nacional.
						</p>
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}
