// Style imports
import classnames from 'classnames'
import { useRouter } from 'next/router.js'
import styles from './OneUpScene.module.scss'





// Local imports
import { Chat } from '../Chat/Chat.jsx'
import { Frame } from '../Frame/Frame.jsx'





/**
 * Large single feed view.
 */
export function OneUpScene() {
	const Router = useRouter()

	const isChatEnabled = Boolean(Router.query.enableChat)

	return (
		<div
			className={classnames(styles['scene-wrapper'], {
				[styles['is-chat-enabled']]: isChatEnabled,
			})}>
			<Frame className={[styles['frame'], styles['host']]} />

			{isChatEnabled && (
				<Chat className={[styles['frame'], styles['chat']]} />
			)}
		</div>
	)
}

OneUpScene.title = '1-Up Scene'
