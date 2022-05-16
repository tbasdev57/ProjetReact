import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ button, onClick }) => (
    <button className="button" onClick={() => onClick()}>{button}</button>
)

Button.propTypes = {
    button: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button
