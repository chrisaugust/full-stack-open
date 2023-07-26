import { useState } from 'react'

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>

const StatisticLine = ({ text, statistic }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{statistic}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const percentPositive = `${(good / all) * 100} %`
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" statistic={good} />
          <StatisticLine text="neutral" statistic={neutral} />
          <StatisticLine text="bad" statistic={bad} />
          <StatisticLine text="all" statistic={good + neutral + bad} />
          <StatisticLine text="average" statistic={average} />
          <StatisticLine text="positive" statistic={percentPositive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allClicks = good + neutral + bad
  
  if (allClicks > 0) {
    return (
      <div>
        <h1>give feedback</h1>
      
        <Button handler={() => setGood(good + 1)} text="good" />
        <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handler={() => setBad(bad + 1)} text="bad"/>

        <Statistics good={good} neutral={neutral} bad={bad} />
      
      </div>
    )
  }

  return (
    <div>
        <h1>give feedback</h1>
      
        <Button handler={() => setGood(good + 1)} text="good" />
        <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handler={() => setBad(bad + 1)} text="bad"/>

        <h1>statistics</h1>
        <p>no feedback given</p>
    </div>
  )
}

export default App