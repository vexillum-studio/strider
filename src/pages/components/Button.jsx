import clsx from 'clsx'

const Button = (props) => {

  const {
    className,
    ...otherProps
  } = props

  return (
    <button
      className={clsx(
        className,
        'outline-none',
        'disabled:cursor-not-allowed'
      )}
      {...otherProps}
    />
  )
}

export default Button
