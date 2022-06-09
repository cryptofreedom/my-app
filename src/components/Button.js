import PropTypes from 'prop-types'
const Button = (props)=>{
    const onClick = (e)=>{
        console.log(e);
    };
    return <button onClick={onClick} className='btn' style={{backgroundColor:props.color}}>{props.text}</button>
};

Button.defaultProps = {color:'steelblue'}
Button.propTypes = {text: PropTypes.string, color: PropTypes.string,onClick:PropTypes.func}
export default Button;