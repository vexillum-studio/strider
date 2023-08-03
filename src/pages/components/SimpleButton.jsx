import clsx from 'clsx'
import Button from './Button'

const SimpleButton = (props) => {

    const {
        className,
        ...otherProps
    } = props

    return (
        <Button
            className={clsx(
                'bg-gradient-to-br from-secondary via-secondary to-dark',
                'hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-secondary',
                'focus:bg-gradient-to-br focus:from-primary focus:via-primary focus:to-secondary',
                'text-primary hover:text-dark focus:text-dark',
                'border border-transparent hover:border-dark',
                'shadow-md hover:shadow-2xl',
                'font-bold',
                'py-2 px-4',
                'rounded-full',
                className
            )}
            {...otherProps}
        />
    )
}

export default SimpleButton