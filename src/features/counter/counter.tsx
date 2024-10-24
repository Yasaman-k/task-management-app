import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { RootState } from '../../app/store'
import { ChangeEvent, useReducer, useState } from 'react'


const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()
    // const [incrementAmount, setIncrementAmount] = useState<number>(0)

    const incrementAmoundReducer = (state: number, action: number) => {
        return action
    }
    const [incrementAmount, setIncrementAmount] = useReducer(incrementAmoundReducer, 0)

    const manageInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value)) {
            setIncrementAmount(Number(e.target.value))
        } else {
            // clear the input field
            e.target.value = '';
        }
    }

    const resetAll = () => {
        dispatch(reset())
        setIncrementAmount(0)
    }

    return (
        <div>
            {count}
            <button onClick={() => dispatch(decrement())}>کاهش</button>
            <button onClick={() => dispatch(increment())}>افزایش</button>
            <button onClick={() => resetAll()}>reset</button>

            <hr />
            <input type="tel" onChange={manageInputValue} />
            <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>add Amount</button>
        </div>
    )
}

export default Counter