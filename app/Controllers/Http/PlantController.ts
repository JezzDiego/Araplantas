import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlantController {
  public async index({ view }: HttpContextContract) {
    return view.render('plants/list')
  }
}
