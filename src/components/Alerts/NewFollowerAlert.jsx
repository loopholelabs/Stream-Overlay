// Local imports
import PropTypes from 'prop-types'
import { Alert } from './Alert.jsx'





export function NewFollowerAlert(props) {
	const { followerName } = props

	return (
		<Alert
			message={`Welcome to the lab, ${followerName}!`}
			title={'New Follower'} />
	)
}

NewFollowerAlert.propTypes = {
	followerName: PropTypes.string.isRequired,
}
