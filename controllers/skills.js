import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index',{
      skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function create(req, res) {
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req, res){
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/edit', {
      skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
} 

function update(req, res){
  Skill.findByIdAndUpdate(req.params.skillId, req.body, {new: true})
  .then(skill => {
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res){
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  create,
  newSkill as new,
  show,
  edit,
  update,
  deleteSkill as delete
}