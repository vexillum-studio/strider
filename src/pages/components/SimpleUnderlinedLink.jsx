import React from 'react'
import Href from './UnderlinedLink'
import clsx from 'clsx'

const SimpleUnderlinedLink = (props) => {

    const {
        className,
        ...otherProps
    } = props

    return (

        <Href
            className={clsx(
                'text-dark',
                'hover:text-primary',
                'focus:text-primary',
                className
            )}
            {...otherProps}
        />
    )
}

export default SimpleUnderlinedLink