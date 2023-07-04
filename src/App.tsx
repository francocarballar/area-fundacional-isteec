import { useRef, useEffect, MutableRefObject, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import ScrollContainer from 'react-indiana-drag-scroll'
import { CenterLocation } from './components/CenterLocation'
import { IconLocation } from './components/icons/location'
import { RightLocation } from './components/RightLocation'
import { LeftLocation } from './components/LeftLocation'
import { MuseumLocation } from './components/MuseumLocation'

function App (): JSX.Element {
	const { width } = useWindowSize()
	const [left, setLeft] = useState<number>(0)
	const [center, setCenter] = useState<number>(0)
	const [right, setRight] = useState<number>(0)
	const [museum, setMuseum] = useState<number>(0)
	const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
	const imgRef: MutableRefObject<HTMLImageElement | null> = useRef(null)

	useEffect(() => {
		const container = containerRef.current
		if (container !== null) {
			const scrollTo = (x: number) => container.scrollTo(x, 0)
			const scrollX = (x: number) => {
				setTimeout(() => {
					scrollTo(x)
				}, 50)
			}
			if (width < 768) {
				scrollX(530)
			} else if (width < 1024) {
				scrollX(350)
			} else {
				scrollX(200)
			}
		}
	}, [containerRef, width])

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const img = imgRef.current
		if (img !== null) {
			const widthImg = img.width
			if (widthImg !== 0) {
				const left = widthImg / 2 / 2 + 70
				setLeft(left)
				const center = widthImg / 2 - 20
				setCenter(center)
				const right = widthImg - 250
				setRight(right)
				const museum = widthImg / 2 + 315
				setMuseum(museum)
			}
		}
	})

	return (
		<ScrollContainer
			className='h-full min-h-screen max-h-screen w-full overflow-x-auto lg:overflow-x-hidden overflow-y-hidden'
			draggingClassName='cursor-grab'
			innerRef={containerRef}
			vertical={false}
		>
			<div className='min-w-full min-h-screen relative'>
				<img
					ref={imgRef}
					src='/mapa-area-fundacional.webp'
					alt='Mapa del área fundacional'
					className='w-auto max-w-none min-h-screen object-contain object-center'
				/>
				<LeftLocation left={left}>
					<IconLocation width='45px' />
				</LeftLocation>
				<CenterLocation center={center}>
					<IconLocation width='45px' />
				</CenterLocation>
				<MuseumLocation museum={museum}>
					<IconLocation width='45px' />
				</MuseumLocation>
				<RightLocation right={right}>
					<IconLocation width='45px' />
				</RightLocation>
			</div>
		</ScrollContainer>
	)
}

export default App
