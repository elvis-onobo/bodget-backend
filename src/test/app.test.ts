import app from '../app'
import request from 'supertest'

describe('Test the base path', ()=>{
    test('should return an success response', async ()=>{
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.body.status).toBe(200)
        expect(res.body.message).toBe('App is live!')
    })
})