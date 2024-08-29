import Logo1 from '@/assets/logo1.svg'
import Logo2 from '@/assets/logo2.svg'
import Logo3 from '@/assets/logo3.svg'
import Logo4 from '@/assets/logo4.svg'
import Logo5 from '@/assets/logo5.svg'

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
]
export const LogoElements = () => {
  return <div className="container flex justify-between items-center">
    {logos.map((logo,index)=>(
      <img src={logo} key={index} alt={`Logo ${index + 1}`} className="logo-image" />
    ))}
  </div>;
};
