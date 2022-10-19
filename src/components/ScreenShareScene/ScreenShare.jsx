// Style imports
import classnames from 'classnames'
import { useRouter } from 'next/router.js'
import styles from './ScreenShare.module.scss'





// Local imports
import { Chat } from '../Chat/Chat.jsx'
import { Frame } from '../Frame/Frame.jsx'





/**
 * Large single feed view.
 */
export function ScreenShare() {
	const Router = useRouter()

	const isChatEnabled = Boolean(Router.query.enableChat)
	const isGuestEnabled = Boolean(Router.query.enableGuest)

	return (
		<div
			className={classnames(styles['scene-wrapper'], {
				[styles['is-chat-enabled']]: isChatEnabled,
				[styles['is-guest-enabled']]: isGuestEnabled,
			})}>

			<Frame className={[styles['frame'], styles['host']]} />

			{isGuestEnabled && (
				<Frame className={[styles['frame'], styles['guest']]} />
			)}

			{isChatEnabled && (
				<Chat className={[styles['frame'], styles['chat']]} />
			)}

			<Frame className={[styles['frame'], styles['screen-share']]} />
		</div>
	)
}

ScreenShare.title = 'Screen Share Scene'
