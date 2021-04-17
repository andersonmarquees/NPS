import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from '../repositories/UsersRepository'
import * as yup from 'yup'
import { AppError } from "../errors/AppError"

class UserController {

  async create(request: Request, respose: Response) {
    const { name, email } = request.body

    const schema = yup.object().shape({
      name: yup.string().required("Nome Obrigatório"),
      email : yup.string().email().required()
    })

    try {
      await schema.validate(request.body, { abortEarly: false })
    } catch (error) {
      return respose.status(400).json({error: error})
    }

    const usersRepository = getCustomRepository(UsersRepository)
    //const usersRepository = getRepository(User)

    const usersAlreadyExists = await usersRepository.findOne({
      email
    })
    if(usersAlreadyExists) {
      throw new AppError("User already exists!")
    }

    const user = usersRepository.create({
      name, email
    })

    await usersRepository.save(user)

    return respose.status(201).json(user)
  }
}

export { UserController }
