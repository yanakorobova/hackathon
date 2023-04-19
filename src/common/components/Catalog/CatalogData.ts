import {DataListType, StatusType} from "../../types/types";

export const catalogData: DataListType[] = [
    {
        id: 1,
        title: 'Начало работы',
        list: ['Для новичка','Основы работы'],
        status: 'inProgress' as StatusType,
        countTasks: 10,
        countCompletedTasks: 8
    },
    {
        id: 2,
        title: 'Работа с библиотеками GPN',
        list: ['Профессионалу','Библиотеки'],
        status: 'start' as StatusType,
        countTasks: 255,
        countCompletedTasks: 0
    },
    {
        id: 3,
        title: 'Введение в рабочую среду ',
        list: ['Профессионалу','Библиотеки'],
        status: 'start' as StatusType,
        countTasks: 10,
        countCompletedTasks: 0
    },
    {
        id: 4,
        title: 'Начало работы',
        list: ['Для новичка','Основы работы'],
        status: 'inProgress' as StatusType,
        countTasks: 10,
        countCompletedTasks: 3
    },
    {
        id: 5,
        title: 'Работа с библиотеками GPN',
        list: ['Профессионалу','Библиотеки'],
        status: 'start' as StatusType,
        countTasks: 255,
        countCompletedTasks: 0
    },
    {
        id: 6,
        title: 'Введение в рабочую среду ',
        list: ['Профессионалу','Библиотеки'],
        status: 'start' as StatusType,
        countTasks: 10,
        countCompletedTasks: 0
    }
]