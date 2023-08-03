import { useLogin } from '../../contexts/LoginContext'
import LabelInput from '../components/LabelInput'
import SimpleButton from '../components/SimpleButton'
import SimpleInput from '../components/SimpleInput'
import SimpleUnderlinedLink from '../components/SimpleUnderlinedLink'
import FirstRegisterStep from './FirstRegisterStep'

const LoginStep = () => {

    const {
        state,
        handleChange,
        setStep,
        login
    } = useLogin()

    return (
        <>
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
                label='Password'
                input={
                    <SimpleInput
                        id='password'
                        type='password'
                        placeholder='Insert your password...'
                        value={state.password}
                        onChange={handleChange}
                    />
                }
            />
            <div className='flex w-full justify-center items-center'>
                <SimpleButton
                    className='w-full'
                    onClick={login}
                >
                    Log in
                </SimpleButton>
            </div>

            {
                <SimpleUnderlinedLink
                    onClick={() => setStep(<FirstRegisterStep />)}
                >
                    ¿Aun no estás registrado? Registrate
                </SimpleUnderlinedLink>
            }
        </>
    )
}

export default LoginStep