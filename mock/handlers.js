// src/mocks/handlers.js
import {rest} from 'msw'

export const handlers = [
    rest.post('/karasi/tables', (req, res, ctx) => {

        req.json().then(tables => sessionStorage.setItem('tables', JSON.stringify(tables)))

        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json({message: 'success'})
        )
    }),

    rest.get('/karasi/tables', (req, res, ctx) => {

        const tables = sessionStorage.getItem('tables')

        let data;

        tables
            ? data = JSON.parse(tables)
            : data = {
                filial_1: {
                    '18.06-25.06': false,
                    '25.06-02.07': true,
                    '02.07-09.07': true,
                    '09.07-16.07': false,
                    '16.07-23.07': true,
                    '23.07-30.07': true,
                    '30.07-06.08': true,
                    '06.08-13.08': false,
                    '13.08-20.08': false,
                    '20.08-27.08': false,
                    '27.08-03.09': true,
                    '03.09-10.09': true,
                    '10.09-17.09': false,
                    '17.09-24.09': false,
                    '24.09-01.10': false,
                },
                filial_2: {
                    '18.06-25.06': false,
                    '25.06-02.07': false,
                    '02.07-09.07': false,
                    '09.07-16.07': true,
                    '16.07-23.07': false,
                    '23.07-30.07': false,
                    '30.07-06.08': false,
                    '06.08-13.08': false,
                    '13.08-20.08': false,
                    '20.08-27.08': true,
                    '27.08-03.09': true,
                    '03.09-10.09': false,
                    '10.09-17.09': false,
                    '17.09-24.09': false,
                    '24.09-01.10': false,
                },
                filial_3: {
                    '20.06-27.06': false,
                    '27.06-04.07': false,
                    '04.07-11.07': false,
                    '11.07-18.07': false,
                    '18.07-25.07': false,
                    '25.07-01.08': false,
                    '01.08-08.08': true,
                    '08.08-15.08': false,
                    '15.08-22.08': false,
                    '22.08-29.08': true,
                    '29.08-05.09': false,
                    '05.09-12.09': false,
                    '12.09-19.09': false,
                    '19.09-26.09': false,
                    '26.09-03.10': false,
                },
            }

        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json(data),
        )
    }),
]
