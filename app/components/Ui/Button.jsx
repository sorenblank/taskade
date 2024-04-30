import Link from "next/link"

const Button = ({className, children, type = 'primary', href}) => {
  let bgClass;
  switch(type) {
    case 'primary':
      bgClass = 'bg-primary';
      break;
    case 'secondary':
      bgClass = 'bg-secondary';
      break;
    case 'accent':
      bgClass = 'bg-accent';
      break;
    default:
      bgClass = 'bg-primary';
  }

  return (
    <Link href={`${href ? href : "/"}`} className={`inline-block px-4 py-2 font-roboto font-semibold text-white rounded-md text-[16px] whitespace-nowrap ${bgClass} ${className ? className : ''} transform transition-transform duration-150 active:scale-95`}>
        {children}
    </Link>
  )
}

export default Button