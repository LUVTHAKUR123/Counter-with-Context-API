import React from 'react'
import CounterProvider from './CounterContext'
import Counter from '../components/Counter'

function CombinedContexts() {
  return (
<>
<div>
    <CounterProvider>
    <Counter/>
    </CounterProvider>
</div>
</>
  )
}

export default CombinedContexts;
// export {CounterContext} from './Counter'