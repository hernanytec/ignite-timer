import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContext'
import { HistoryContainer, HistoryHeader, HistoryList, Status } from './styles'

export function History() {
  const { cycles, clearCyclesList } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <HistoryHeader>
        <h1>Meu histórico</h1>
        <span title="Limpar histórico">
          <Trash className="trash-icon" size={24} onClick={clearCyclesList} />
        </span>
      </HistoryHeader>

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
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
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
