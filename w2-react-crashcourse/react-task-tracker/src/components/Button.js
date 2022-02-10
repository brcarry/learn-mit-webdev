import PropTypes from 'prop-types'

const Button = (props) => {
    return <button className='btn' 
        onClick={props.onClick} 
        style={{backgroundColor: props.color}}>
          {props.text}
        </button>
}

// 如果写成
// const Button = () => {
//     return (<button className='btn'>Add</button>)
//   }
// 则无法正常渲染

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button