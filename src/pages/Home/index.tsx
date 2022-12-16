import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  CountDownSeparator,
  FormContainer,
  HomeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou Trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmmount">durante</label>
          <input id="minutesAmmount" type="number" />

          <span>Minutos</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <CountDownSeparator>:</CountDownSeparator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
