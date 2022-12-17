import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContext'
import {
  AvailableStatusColors,
  HistoryContainer,
  HistoryList,
  Status,
} from './styles'

interface Task {
  name: string
  duration: string
  date: string
  status: 'Conluído' | 'Em andamento' | 'Interrompido'
  statusColor: AvailableStatusColors
}

export function History() {
  const { cycles } = useContext(CyclesContext)

  const tasks = [
    {
      name: 'tarefa 1',
      duration: '1 min',
      date: 'Há 10 dias',
      status: 'Concluído',
      statusColor: 'green',
    },
    {
      name: 'tarefa 2',
      duration: '2 min',
      date: 'Há 20 dias',
      status: 'Em andamento',
      statusColor: 'yellow',
    },
    {
      name: 'tarefa 3',
      duration: '3 min',
      date: 'Há 30 dias',
      status: 'Interrompido',
      statusColor: 'red',
    },
  ] as Task[]

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>{cycle.startDate.toISOString()}</td>
                <td>
                  {cycle.finishedDate && (
                    <Status color="green">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status color="red">Interrompido</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status color="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
