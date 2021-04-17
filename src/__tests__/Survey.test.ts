import request from 'supertest'
import { getConnection } from 'typeorm'
import { app } from '../app'
import createConnection from '../database'

describe("Surveys", () => {
  beforeAll(async () => {
    const connetion = await createConnection()
    await connetion.runMigrations()
  })
  afterAll(async () => {
    const connetion = getConnection()
    await connetion.dropDatabase()
    await connetion.close()
  })

  it("Should be able to create a new survey", async() => {
    const response = await request(app).post("/surveys").send({
      title: "Title Example",
      description: "Description Example"
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
  })

  it("Should be able to get all surveys" , async() => {
    await request(app).post("/surveys").send({
      title: "Title Example2",
      description: "Description Example2"
    })
    const response = await request(app).get("/surveys")
    expect(response.body.length).toBe(2)
  })
})