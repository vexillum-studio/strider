import clsx from 'clsx'
import Input from './Input'

const SimpleInput = (props) => {

    const {className, ...otherProps} = props

    return (
        <Input
            className={clsx(
                'bg-shadow',
                'placeholder-secondary',
                'w-full',
                'rounded-full',
                'border border-dark',
                'shadow-md',
                'px-3 py-1',
                'caret-primary',
                className
            )}
            {...otherProps}
        />
    )
}

export default SimpleInput