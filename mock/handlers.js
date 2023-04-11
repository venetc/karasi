// src/mocks/handlers.js
import {rest} from 'msw'

export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')

        return res(
            // Respond with a 200 status code
            ctx.status(200),
        )
    }),

    rest.get('/tables', (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json({
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
            }),
        )
    }),
]
