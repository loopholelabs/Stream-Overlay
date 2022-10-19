// Style imports
import classnames from 'classnames'
import { useRouter } from 'next/router.js'
import styles from './TwoUpScene.module.scss'





// Local imports
import { Chat } from '../Chat/Chat.jsx'
import { Frame } from '../Frame/Frame.jsx'





/**
 * Large single feed view.
 */
export function TwoUpScene() {
	const Router = useRouter()

	const isChatEnabled = Boolean(Router.query.enableChat)

	return (
		<div
			className={classnames(styles['scene-wrapper'], {
				[styles['is-chat-enabled']]: isChatEnabled,
			})}>

			<Frame className={[styles['frame'], styles['host']]} />
			<Frame className={[styles['frame'], styles['guest']]} />

			{isChatEnabled && (
				<Chat className={[styles['frame'], styles['chat']]} />
			)}
		</div>
	)
}

TwoUpScene.title = '2-Up Scene'
