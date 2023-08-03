import clsx from 'clsx'
import React from 'react'

const UnderlinedLink = (props) => {

    const {
        className,
        ...otherProps
    } = props

    return (
        <button
            className={clsx(
                className,
                'hover:underline',
                'hover:scale-105',
                'focus:underline',
                'focus:outline-none',
                'focus:scale-105'
            )}
            {...otherProps}
        />
    )
}

export default UnderlinedLink