/**
 * Swagger
 * This i a   .      out more   at  [http://.io](ttp://.io) or on  [irc.freenode.ne, #](ht://swager.io/irc/). 
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

case class User (
  id: Option[Long] = None,
  username: Option[String] = None,
  firstName: Option[String] = None,
  lastName: Option[String] = None,
  email: Option[String] = None,
  password: Option[String] = None,
  phone: Option[String] = None,
  /* User Status */
  userStatus: Option[Int] = None
) extends ApiModel


