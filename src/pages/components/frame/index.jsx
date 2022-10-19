// Style imports
import styles from './frame.module.scss'





// Local imports
import { Frame } from '../../../components/Frame/Frame.jsx'





/**
 * A standalone frame.
 */
export default function FramePage() {
	return (
		<Frame className={styles['frame']} />
	)
}
