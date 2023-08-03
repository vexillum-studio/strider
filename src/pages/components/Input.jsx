import clsx from 'clsx'

const Input = (props) => {

    const { className, ...otherProps } = props

    return (
        <input
            className={clsx(
                'focus:outline-none',
                'active:outline-none',
                className
            )}
            {...otherProps}
        />
    )
}

export default Input