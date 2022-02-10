import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='black' text='Add' onClick={onClick}/>
        </header>
        )
    }

// CSS in JS 1

// const Header = (props) => {
//   return (
//     <header>
//         <h1 style={{ color: 'blue',}}>{props.title}</h1>
//     </header>
//   )
// }

// CSS in JS 2

// const Header = (props) => {
// return (
//     <header>
//         <h1 style={headingStyle}>{props.title}</h1>
//     </header>
//     )
// }

// const headingStyle = {
//     color: 'blue'
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header