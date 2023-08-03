import clsx from 'clsx'

const Card = (props) => {

    const {className, ...otherProps} = props

    return (
        <div
            className={clsx(
                'p-4',
                'gap-4',
                'rounded-lg shadow-lg',
                'bg-light',
                className
            )}
            {...otherProps}
        />
    )
}

export default Card