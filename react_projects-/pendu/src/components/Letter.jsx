
import {Component} from "react";
import PropTypes from 'prop-types'
import './letter.css'

class Letter extends Component {

    static propTypes = {
        letter: PropTypes.string.isRequired,
        status: PropTypes.oneOf([
            'clicked',
            'not_clicked'
        ]).isRequired,
        index: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    render() {
        let {letter, status, onClick} = this.props;
        return (
            <div className={`letter ${status}`} onClick={() => onClick(letter)}>
                <span className="symbol">
                  {letter}
                </span>
            </div>
        );
    }

}

export default Letter