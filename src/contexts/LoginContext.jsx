import {
    createContext,
    useState,
    useMemo,
    useContext,
    useCallback
} from 'react'

import FirstRegisterStep from '../pages/register/FirstRegisterStep'

const initialState = {
    name: '',
    email: '',
    birthdate: '',
    password: '',
    confirmPassword: ''
}

const LoginContext = createContext()

const LoginProvider = (props) => {

    const [state, setState] = useState(initialState)
    const [step, setStep] = useState(<FirstRegisterStep />)

    const handleChange = useCallback((event) => {
        const { id, value } = event.target
        setState({
            ...state,
            [id]: value
        })
    }, [state, setState])

    const register = useCallback(async () => {
        console.log('Registering with:', state)
        setState(initialState)
    }, [state])

    const login = useCallback(async () => {
        console.log('Logging in with: ' + state.email + ' ' + state.password)
    }, [state])

    const value = useMemo(() => ({
        state,
        step,
        register,
        login,
        handleChange,
        setStep
    }), [
        state,
        step,
        register,
        login,
        handleChange,
        setStep
    ])
    return <LoginContext.Provider value={value} {...props} />
}

const useLogin = () => {
    const context = useContext(LoginContext)
    if (!context) {
        throw new Error('Invalid use of useLogin, LoginProvider must be defined in parent hierarchy')
    }
    return context
}


export { LoginProvider, useLogin }