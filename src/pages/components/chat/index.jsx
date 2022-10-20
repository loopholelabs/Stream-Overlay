// Style imports
import styles from './chat.module.scss'





// Local imports
import { Chat } from '../../../components/Chat/Chat.jsx'





/**
 * A standalone chat.
 */
export default function ChatPage() {
	return (
		<Chat className={styles['chat']} />
	)
}
