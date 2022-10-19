// Style imports
import styles from './Alerts.module.scss'





// Module imports
import { AnimatePresence } from 'framer-motion'





// Local imports
import { NewFollowerAlert } from './NewFollowerAlert.jsx'
import { useStore } from '../../store/react.js'





export function Alerts() {
	const { events } = useStore(state => ({
		events: state.events,
	}))

	console.log({events})

	return (
		<div className={styles['alerts']}>
			<AnimatePresence>
				{events.map(event => {
					return (
						<NewFollowerAlert
							key={event.id}
							followerName={event.data.userDisplayName} />
					)
				})}
			</AnimatePresence>
		</div>
	)
}
