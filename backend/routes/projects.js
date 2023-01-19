const { Router } = require('express')
const router = Router()
/////////////
const project = require('../models/project')

router.get('/',async (req, res) => {
  const projects = await project.find()
  res.json(projects)
})

router.get('/:id', async (req, res) => {
  const projects = await project.findById(req.params.id)
  res.json(projects)
})

router.post('/', async (req, res) => {
  const { projectType,
    titleProject,
    subTitleProject,
    dataProject,
    imageLegend} = req.body
  const newProject = new Project({
    projectType,
    titleProject,
    subTitleProject,
    dataProject,
    imageLegend
  })
  await newProject.save()
  res.json({message: 'Project save'})
  console.log(newProject)
})

router.delete('/:id', async (req, res) => {
  /* console.log(req.params.id) */
  const user = await Project.findByIdAndDelete(req.params.id)
  res.json({ message: 'project deleted' })
})
module.exports = router