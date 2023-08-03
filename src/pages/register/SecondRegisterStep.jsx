
import { useLogin } from '../../contexts/LoginContext'

import LabelInput from '../components/LabelInput'
import SimpleButton from '../components/SimpleButton'
import SimpleInput from '../components/SimpleInput'
import FirstRegisterStep from './FirstRegisterStep'
import { useNocturnal } from '../../commons/useNocturnal'
import clsx from 'clsx'

const SecondRegisterStep = () => {

    const {
        state,
        handleChange,
        setStep,
        register
    } = useLogin()



    const validateForm = () => {
        const { password, confirmPassword } = state
        const isPasswordValid = password !== '' && password === confirmPassword;
        return (
            isPasswordValid
        )
    }

    const handleNext = () => {
        if (validateForm()) {
            register()
        } else {
            console.log('Password dont match')
        }
    }

    return (
        <>
            <LabelInput
                label='Password'
                input={
                    <SimpleInput
                        id='password'
                        type='password'
                        value={state.password}
                        onChange={handleChange}
                    />
                }
            />
            <LabelInput
                label='Confirm Password'
                input={
                    <SimpleInput
                        id='confirmPassword'
                        type='password'
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                }
            />
            <div
                className={clsx(
                    'flex',
                    'gap-2'
                )}
            >
                <SimpleButton
                    children='Go Back'
                    onClick={() => setStep(<FirstRegisterStep />)}
                />
                <SimpleButton
                    children='Register'
                    onClick={handleNext}
                />
            </div>
        </>
    )
}

export default SecondRegisterStep