import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ShoppingController {
  public async index({ view }: HttpContextContract) {
    return view.render('shopping/index')
  }
}
