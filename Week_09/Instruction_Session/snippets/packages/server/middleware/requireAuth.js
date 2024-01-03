import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import keys from '../config/keys'
import { User } from '../models'

module.exports = async (req, res, next) => {
  const authorization = req.get('authorization')
  // authorization === Bearer ewefwegwrherhe
  if (!authorization) {
    return res.status(401).json({ error: 'you must be logged in' })
  }
  const token = authorization.replace('Bearer ', '')
  jwt.verify(token, keys.jwt.secret, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'you must be logged in' })
    }
    const { id } = payload
    User.findById(id).then((userdata) => {
      req.user = userdata
      next()
    })
  })
}
