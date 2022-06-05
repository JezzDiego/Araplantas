import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async signup({ view }: HttpContextContract) {
    return view.render('session/signup')
  }
  public async login({ view }: HttpContextContract) {
    return view.render('session/login')
  }
  public async profile({ view }: HttpContextContract) {
    return view.render('session/profile')
  }
}
