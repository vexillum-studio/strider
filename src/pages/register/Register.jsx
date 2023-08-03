import Title from '../components/Title'
import clsx from 'clsx'
import Card from '../components/Card'

import { useLogin } from '../../contexts/LoginContext'

const Register = () => {

    const {
        step
    } = useLogin()

    return (
        <div className='relative'>
            <div
                className={clsx(
                    'absolute',
                    'w-full h-full',
                    'bg-lime-50 ',
                    'blur-lg'
                )}
            />
            <Card
                className={clsx(
                    'relative',
                    'flex flex-col',
                    'items-center',
                    'w-72 h-100',
                    'backdrop-blur-sm bg-light'
                )}
            >
                <Title text='Vexilum Network' />
                <div
                    className={clsx(
                        'flex flex-col',
                        'items-center justify-center',
                        'w-full h-full',
                        'gap-4'
                    )}
                >
                    {step}
                </div>
            </Card>
        </div>
    )
}

export default Register
