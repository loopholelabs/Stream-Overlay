export function Hexagon(props) {
	const width = parseInt(props.width)

	const height = (width / 60) * 52

	const points = [
		// top left
		`${width * 0.25},0`,

		// top right
		`${width * 0.75},0`,

		// right
		`${width},${height / 2}`,

		// bottom right
		`${width * 0.75},${height}`,

		// bottom left
		`${width * 0.25},${height}`,

		// left
		`0,${height / 2}`,
	]

	return (
		<svg
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			width={width}>

			<linearGradient
				id={'purple-fade'}
				x1={'0'}
				x2={'1'}
				y1={'0'}
				y2={'1'}>
				<stop stopColor={'rgba(126, 18, 221, 1)'} />
				<stop stopColor={'rgba(181, 48, 221, 1)'} />
			</linearGradient>

			<polygon
				fill={'transparent'}
				points={points}
				stroke={'url(#purple-fade)'}
				strokeWidth={4} />
		</svg>
	)
}
