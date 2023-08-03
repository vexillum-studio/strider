import clsx from 'clsx'

const Title = (props) => {
    const { text } = props
    return (
        <h1
            className={clsx(
                'flex',
                'w-full',
                'justify-center',
                'text-primary',
                'font-bold',
                'text-xl'
            )}
        >
            {text}
        </h1>
    )
}


export default Title 