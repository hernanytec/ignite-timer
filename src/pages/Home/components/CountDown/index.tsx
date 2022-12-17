import { differenceInSeconds } from 'date-fns'
import { useEffect, useState } from 'react'
import { CountDownContainer, CountDownSeparator } from './styles'

export function CountDown() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let intervalId: number

    if (activeCycle) {
      intervalId = setInterval(() => {
        const difference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (difference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId)
                return { ...cycle, finishedDate: new Date() }

              return cycle
            }),
          )
          setAmountSecondsPassed(totalSeconds)
          clearInterval(intervalId)
        } else {
          setAmountSecondsPassed(difference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <CountDownSeparator>:</CountDownSeparator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
