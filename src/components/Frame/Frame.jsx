// Style imports
import styles from './Frame.module.scss'





// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'





/**
 * Renders a frame for a video feed or image.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} [props.children] The contents of the component.
 * @param {string} [props.className] Additional class names to be applied to the component.
 */
export function Frame(props) {
	const {
		children,
		className,
	} = props

	const compiledClassName = classnames(styles['frame'], className)

	return (
		<div className={compiledClassName}>
			{children}
		</div>
	)
}

Frame.defaultProps = {
	children: null,
	className: '',
}

Frame.propTypes = {
	children: PropTypes.node,
	className: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string,
	]),
}
