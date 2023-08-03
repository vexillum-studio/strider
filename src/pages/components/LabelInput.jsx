const LabelInput = (props) => {

  const {
    label,
    input
  } = props

  return (
    <div className='w-full'>
      <label className='font-bold'>{label}</label>
      {input}
    </div>
  )
}

export default LabelInput
