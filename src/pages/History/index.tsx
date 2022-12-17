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
            {tasks.map((task) => (
              <tr key={task.name}>
                <td>{task.name}</td>
                <td>{task.duration}</td>
                <td>{task.date}</td>
                <td>
                  <Status color={task.statusColor}>{task.status}</Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
