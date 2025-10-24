import React from 'react'
import './Form.scss'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setText, clearText } from '../../feature/formSlice'

export const Form = (props: { createNewToDo: Function }) => {
    const dispatch = useAppDispatch()
    const text = useAppSelector((state) => state.form.text)

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (text) {
            props.createNewToDo(text)
            dispatch(clearText())
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => dispatch(setText(e.target.value))}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}