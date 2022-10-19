// Style imports
import styles from './AppWrapper.module.scss'





// Module imports
import PropTypes from 'prop-types'





// Local imports
import { Alerts } from '../Alerts/Alerts.jsx'
import { Hexagon } from '../Hexagon/Hexagon.jsx'





/**
 * Wraps page content.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} [props.title] The title of the page.
 */
export function AppWrapper(props) {
	const {
		children,
		// title,
	} = props

	return (
		<main className={styles['app-wrapper']}>
			<div className={styles['hex-group']}>
				<Hexagon width={1050} />
				<Hexagon width={1304} />
				<Hexagon width={1528} />
			</div>

			<div className={styles['hex-group']}>
				<Hexagon width={1050} />
				<Hexagon width={1304} />
				<Hexagon width={1528} />
			</div>

			{children}

			<Alerts />
		</main>
	)
}

AppWrapper.defaultProps = {
	children: null,
	title: 'UNTITLED',
}

AppWrapper.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
}
