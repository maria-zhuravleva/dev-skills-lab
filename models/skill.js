import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillsSchema = new Schema({
  text: String,
  essential: Boolean
})

const Skill = mongoose.model('Skill', skillsSchema)

export {
  Skill
}