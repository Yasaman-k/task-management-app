import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { RootState } from '../../app/store'
import { ChangeEvent, useReducer, useState } from 'react'


const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()

    const incrementAmoundReducer = (state: number | string, action: string | number) => {
        return action
    }
    const [incrementAmount, setIncrementAmount] = useReducer(incrementAmoundReducer, '')

    const convertPersianToEnNum = (num: string) => {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        if (!persianNumbers.includes(num)) return false
        const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const persianIndex = persianNumbers.indexOf(num);
        return (englishNumbers[persianIndex]);
    }

    const manageInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        const lastChar = inputValue.charAt(inputValue.length - 1)
        // english number
        if (!inputValue) {
            setIncrementAmount('')
        }
        if (Number(inputValue)) {
            setIncrementAmount(Number(inputValue))
            return
        }
        // persian number exist
        const englishNum = convertPersianToEnNum(lastChar)
        if (englishNum) {
            setIncrementAmount(Number(incrementAmount + englishNum))
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
            <input type="text" placeholder='قیمت به تومان' value={incrementAmount} onChange={manageInputValue} />
            <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>add Amount</button>
        </div>
    )
}

export default Counter