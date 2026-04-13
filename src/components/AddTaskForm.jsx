import Field from "./Field";
import Button from "./Button";
import {useContext, useState} from "react";
import {TasksContext} from "../context/TasksContext";

const AddTaskForm = () => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = useContext(TasksContext)

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    const [error, setErrors] = useState('')

const onSubmit = (e) => {
        e.preventDefault();

        if (!isNewTaskTitleEmpty) {
addTask(clearNewTaskTitle)
        }
}

const onInput = (e) => {
        const { value } = e.target;
        const clearValue = value.trim()
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0

        setNewTaskTitle(value)
        setErrors(hasOnlySpaces ? 'The task cannot be empty' : '')
}

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
            className="todo__field"
            label="New Task title"
            id="new-task"
            value={newTaskTitle}
            error={error}
            onInput={onInput}
            ref={newTaskInputRef}
            />
            <Button type="submit"
                    isDisabled={isNewTaskTitleEmpty}
            >
                Add
            </Button>
        </form>
    )
}

export default AddTaskForm