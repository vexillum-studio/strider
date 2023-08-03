import './output.css'
import clsx from 'clsx'
import { LoginProvider } from './contexts/LoginContext'
import Register from './pages/register/Register'

const App = () => {
  return (
    
    <div className={clsx(
      'fixed',
      'flex flex-center',
      'items-center justify-center',
      'w-full h-full',
      'bg-gradient-to-b from-transparent via-secondary to-secondary',
      'bg-no-repeat bg-wallpaper bg-cover',
      'backdrop-filter backdrop-blur-xl',
      'font-roboto'
    )}
    >
      <LoginProvider>
        <Register />
      </LoginProvider>
    </div>
  )
}

export default App