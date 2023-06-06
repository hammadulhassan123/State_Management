import { useRecoilState,useRecoilValue } from 'recoil'
import { recoilCount,recoilSelector,modifier } from './state'

function ComponentTwo() {
  const [count, setCount] = useRecoilState(recoilCount);
  const [mod,setMod] = useRecoilState(modifier);
 const modifiedCount = useRecoilValue(recoilSelector);
  return (
    <>
      <div className="card" style={{border:"2px solid blue", }} >
        <h1>Component: 2</h1>
        <input type="number" value={mod} onChange={(e)=>setMod(e.target.value)} />
        <button onClick={() => setCount((count) => count + 1)}>
          Modified count is {modifiedCount}
        </button>
        <br />
      </div>
   
    </>
  )
}

export default ComponentTwo
