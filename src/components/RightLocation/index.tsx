import { MutableRefObject, useRef, useState } from 'react'
import { Modal } from 'flowbite-react'
export function RightLocation ({
	children,
	right
}: {
	children: JSX.Element
	right: number
}): JSX.Element {
	const [visible, setVisible] = useState<boolean>(false)
	const video: MutableRefObject<HTMLVideoElement | null> = useRef(null)

	const onClose = (): void => {
		if (video.current !== null) {
			video.current.pause()
			setVisible(false)
		}
	}

	return (
		<>
			<div
				style={{ left: `${right}px` }}
				className='absolute top-[80%] cursor-pointer'
				onClick={() => setVisible(true)}
			>
				{children}
			</div>
			<Modal dismissible show={visible} onClose={onClose}>
				<Modal.Header>Parque O'Higgins</Modal.Header>
				<Modal.Body>
					<video
						ref={video}
						className='w-full h-auto'
						src='https://res.cloudinary.com/francocarballar/video/upload/v1688436734/AreaFundacional/V%C3%ADdeo_PARQUE_Hecho_con_Clipchamp_1_nhqyf2.mp4'
						preload='https://res.cloudinary.com/francocarballar/video/upload/v1688436734/AreaFundacional/V%C3%ADdeo_PARQUE_Hecho_con_Clipchamp_1_nhqyf2.mp4'
						controls
					/>
				</Modal.Body>
			</Modal>
		</>
	)
}
