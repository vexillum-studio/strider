import { useLogin } from '../../contexts/LoginContext'
import LabelInput from '../components/LabelInput'
import SimpleButton from '../components/SimpleButton'
import SimpleInput from '../components/SimpleInput'
import SimpleUnderlinedLink from '../components/SimpleUnderlinedLink'
import LoginStep from './LoginStep'
import SecondRegisterStep from './SecondRegisterStep'

const FirstRegisterStep = () => {
    const { state, handleChange, setStep } = useLogin()

    const validateForm = () => {
        const { name, email, birthdate } = state
        const isNameValid = name.length >= 5
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        const currentDate = new Date()
        const twelveYearsAgo = new Date()
        twelveYearsAgo.setFullYear(twelveYearsAgo.getFullYear() - 12)
        const selectedDate = new Date(birthdate)
        const isBirthdateValid = selectedDate <= twelveYearsAgo && selectedDate <= currentDate
        return (
            isNameValid &&
            isEmailValid &&
            isBirthdateValid
        )
    }

    const handleNext = () => {
        if (validateForm()) {
            setStep(<SecondRegisterStep />)
        } else {
            console.log('Form Not Valid')
        }
    }

    return (
        <>
            <LabelInput
                label='Name'
                input={
                    <SimpleInput
                        id='name'
                        type='text'
                        placeholder='Insert your name...'
                        value={state.name}
                        onChange={handleChange}
                    />
                }
            />
            <LabelInput
                label='Email'
                input={
                    <SimpleInput
                        id='email'
                        type='email'
                        placeholder='Insert your email...'
                        value={state.email}
                        onChange={handleChange}
                    />
                }
            />
            <LabelInput
                label='Birthdate'
                input={
                    <SimpleInput
                        id='birthdate'
                        type='date'
                        value={state.birthdate}
                        onChange={handleChange}
                    />
                }
            />
            <div className='flex w-full justify-center items-center'>
                <SimpleButton
                    className='w-full'
                    onClick={handleNext}
                >
                    Next
                </SimpleButton>
            </div>

            <SimpleUnderlinedLink onClick={() => setStep(<LoginStep />)}>
                ¿Ya estás registrado? Inicia sesión
            </SimpleUnderlinedLink>
        </>
    )
}

export default FirstRegisterStep
