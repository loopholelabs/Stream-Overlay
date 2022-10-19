// Style imports
import styles from './Alerts.module.scss'





// Module imports
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'





// Local imports
import { Logomark } from '../Logomark/Logomark.jsx'





export function Alert(props) {
	const {
		icon,
		message,
		title,
	} = props

	return (
		<motion.div
			animate={{ opacity: 1 }}
			className={styles['alert']}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}>
			<div className={styles['icon']}>
				{icon}
			</div>

			<header>
				{title}
			</header>

			<p>{message}</p>
		</motion.div>
	)
}

Alert.defaultProps = {
	icon: <Logomark />,
	message: 'NO MESSAGE SET',
	title: 'NO TITLE SET',
}

Alert.propTypes = {
	icon: PropTypes.node,
	message: PropTypes.node,
	title: PropTypes.node,
}
