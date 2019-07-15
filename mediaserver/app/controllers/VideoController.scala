package controllers

import javax.inject._
import play.api.Configuration
import play.api.mvc._
import scala.concurrent.Future

@Singleton
class VideosController @Inject()(cc: ControllerComponents,
                                 configuration: Configuration) extends AbstractController(cc) {

  def post() = Action.async { implicit request: Request[AnyContent] =>
    Future.successful(Ok("File posted."))
  }

}
