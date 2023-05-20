import React from 'react';
import {TodoIcon} from './index'

function CheckIcon({completed,onComplete}){
    return (
        <TodoIcon
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}
export { CheckIcon }