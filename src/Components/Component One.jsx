import { useRecoilState } from 'recoil'
import { recoilCount } from './state'

function ComponentOne() {
  const [count, setCount] = useRecoilState(recoilCount)

  return (
    <>
      <div className="card" style={{border:"2px solid purple"}}>
      <h1>Component: 1</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        <br />
   
    </>
  )
}

export default ComponentOne
