import {DataListType, StatusType} from "../../types/types";

export const pathData: DataListType[] = [
    {
        id: 1,
        title: 'Добро пожаловать!',
        list: ['Для новичка','Основы работы'],
        status: 'completed' as StatusType
    },
    {
        id: 2,
        title: 'Начало работы',
        list: ['Для новичка','Основы работы'],
        status: 'inProgress' as StatusType,
        countTasks: 10,
        countCompletedTasks: 8
    },
    {
        id: 3,
        title: 'Введение в рабочую среду ',
        list: ['Для новичка','Основы работы'],
        status: 'start' as StatusType,
        countTasks: 10,
        countCompletedTasks: 0
    }
]