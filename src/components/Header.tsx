import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <div className='flex justify-center items-center h-screen p-8'>
      <img src={logo.src} alt='North Star' className='h-16' />
    </div>
  )
}
