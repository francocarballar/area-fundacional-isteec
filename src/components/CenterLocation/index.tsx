import { MutableRefObject, useRef, useState } from 'react'
import { Modal } from 'flowbite-react'
export function CenterLocation ({
	children,
	center
}: {
	children: JSX.Element
	center: number
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
				style={{ left: `${center}px` }}
				className='absolute top-1/2 cursor-pointer'
				onClick={() => setVisible(true)}
			>
				{children}
			</div>
			<Modal dismissible show={visible} onClose={onClose}>
				<Modal.Header>Plaza Pedro del Castillo</Modal.Header>
				<Modal.Body>
					<video
						ref={video}
						className='w-full h-auto'
						src='https://res.cloudinary.com/francocarballar/video/upload/v1688436518/AreaFundacional/V%C3%ADdeo_PLAZA_Hecho_con_Clipchamp_1_velvfe.mp4'
						preload='https://res.cloudinary.com/francocarballar/video/upload/v1688436518/AreaFundacional/V%C3%ADdeo_PLAZA_Hecho_con_Clipchamp_1_velvfe.mp4'
						controls
					/>
				</Modal.Body>
			</Modal>
		</>
	)
}
