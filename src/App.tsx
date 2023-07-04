import { useRef, useEffect, MutableRefObject } from 'react'
import { useWindowSize } from 'usehooks-ts'
import ScrollContainer from 'react-indiana-drag-scroll'
import { CenterLocation } from './components/CenterLocation'
import { IconLocation } from './components/icons/location'
import { RightLocation } from './components/RightLocation'
import { LeftLocation } from './components/LeftLocation'
import { MuseumLocation } from './components/MuseumLocation'

function App (): JSX.Element {
	const { width } = useWindowSize()
	const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

	useEffect(() => {
		const container = containerRef.current
		if (container !== null) {
			const scrollTo = (x: number) => container.scrollTo(x, 0)
			const scrollX = (x: number) => {
				setTimeout(() => {
					scrollTo(x)
				}, 600)
			}
			if (width < 768) {
				scrollX(630)
			} else if (width < 1024) {
				scrollX(350)
			} else {
				scrollX(200)
			}
		}
	}, [containerRef, width])

	return (
		<ScrollContainer
			className='h-full min-h-screen max-h-screen w-full overflow-x-auto lg:overflow-x-hidden overflow-y-hidden'
			draggingClassName='cursor-grab'
			innerRef={containerRef}
			vertical={false}
		>
			<div className='w-full min-w-fit h-full min-h-fit relative'>
				<img
					src='/mapa-area-fundacional.webp'
					alt='Mapa del área fundacional'
					className='w-auto max-w-none min-h-screen object-contain object-center'
				/>
				<LeftLocation>
					<IconLocation width='45px' />
				</LeftLocation>
				<CenterLocation>
					<IconLocation width='45px' />
				</CenterLocation>
				<MuseumLocation>
					<IconLocation width='45px' />
				</MuseumLocation>
				<RightLocation>
					<IconLocation width='45px' />
				</RightLocation>
			</div>
		</ScrollContainer>
	)
}

export default App
