import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setText, clearText } from '../../feature/formSlice'
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from './Form.styled'
import plusIcon from '../../assets/images/plus.png'

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
        // <div className="form-wrapper">
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        type="text"
                        value={text}
                        onChange={(e) => dispatch(setText(e.target.value))}
                    />
                    <FormControl icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}