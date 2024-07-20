import { Plus } from 'lucide-react'
import CountUp from 'react-countup'

export const Stast = ({ title, start = undefined, end }) => (
  <article>
    <div className="flex items-center justify-center gap-x-2">
      <CountUp
        className="text-2xl text-white"
        start={start}
        end={end}
        duration={3}
      />
      <Plus color="#ffa500" />
    </div>
    <span className="secondary-text">{title}</span>
  </article>
)
