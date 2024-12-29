import { cn } from '@/lib/utils'

interface props {
  className: string
}

const Underline = ({ className }: props) => {
  return (
    <div className={cn('text-accent-900 rotate-180', className)}>
      <svg viewBox="0 0 1181 374" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M74 281.649C459.5 370.94 365.292 66.3153 578 74.1487C739.147 80.0833 805 336.44 1075 123.94M-382 1104.5C-382 1104.5 -239.316 1308.47 -99.5 1308.5C43.3692 1308.53 69.7073 1122.01 211.5 1104.5C380.671 1083.61 426.29 1294.3 592.5 1256.5C731 1225 788.5 1082.5 788.5 1082.5"
          stroke="currentColor"
          strokeWidth="100"
          fill="none"
        />
      </svg>
    </div>
  )
}

export default Underline
