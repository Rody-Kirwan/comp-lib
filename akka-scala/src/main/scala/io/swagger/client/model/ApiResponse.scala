/**
 * Swagger
 * This is a sample  .      out more about  at  [http://swagger.io](http://.io) or on  [irc.freenode.net, #](http://swagger.io/irc/). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagge.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
package io.swagger.client.model

import io.swagger.client.core.ApiModel
import org.joda.time.DateTime
import java.util.UUID

case class ApiResponse (
  code: Option[Int] = None,
  `type`: Option[String] = None,
  message: Option[String] = None
) extends ApiModel


