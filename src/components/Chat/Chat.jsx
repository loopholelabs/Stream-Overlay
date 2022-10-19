// Style imports
import styles from './Chat.module.scss'





// Module imports
import {
	faCircleCheck,
	faCircleXmark,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'





// Local imports
import { Frame } from '../Frame/Frame.jsx'
import { useStore } from '../../store/react.js'





/**
 * Renders a frame for a chat feed.
 *
 * @param {object} props All props.
 * @param {string} [props.className] Additional class names to be applied to the component.
 */
export function Chat(props) {
	const { className } = props
	const {
		chatMessages,
		isChatConnected,
		isChatConnecting,
	} = useStore(state => ({
		chatMessages: state.chatMessages,
		isChatConnected: state.isChatConnected,
		isChatConnecting: state.isChatConnecting,
	}))

	const compiledClassName = classnames(styles['chat'], className)

	return (
		<Frame className={compiledClassName}>
			<div>
				<div className={`${styles['message']} ${styles['system']}`}>
					{isChatConnecting && (
						<>
							<div>
								{'Connecting to chat...'}
							</div>

							<div>
								<FontAwesomeIcon
									fixedWidth
									icon={faSpinner}
									spinPulse />
							</div>
						</>
					)}

					{(!isChatConnecting && isChatConnected) && (
						<>
							<div>
								{'Connected!'}
							</div>

							<div style={{ color: 'green' }}>
								<FontAwesomeIcon
									fixedWidth
									icon={faCircleCheck} />
							</div>
						</>
					)}

					{(!isChatConnecting && !isChatConnected) && (
						<>
							<div>
								{'Failed to connect to chat.'}
							</div>

							<div style={{ color: 'red' }}>
								<FontAwesomeIcon
									fixedWidth
									icon={faCircleXmark} />
							</div>
						</>
					)}
				</div>

				{chatMessages.map(chatMessage => {
					return (
						<div
							className={styles['message']}
							key={chatMessage.id}>
							<div
								className={styles['username']}
								style={{ color: chatMessage.userInfo.color }}>
								{chatMessage.userInfo.displayName}
							</div>

							<div className={styles['content']}>
								{chatMessage.content.value}
							</div>
						</div>
					)
				})}
			</div>
		</Frame>
	)
}

Chat.defaultProps = {
	className: '',
}

Chat.propTypes = {
	className: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string,
	]),
}
