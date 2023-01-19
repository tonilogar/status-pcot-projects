import { CreateUiProjects } from './classes/createUiProjects/createUiProjects.js'
import { ProjectsService } from './classes/projectsService/projectsService.js'

window.onload = () => {

  const createUiProjects = new CreateUiProjects()
  createUiProjects.renderUiProjects()
  setTimeout(checkInput, 2000)
}

function checkInput() {
  const projects = document.querySelectorAll('.inputProject')
  projects.forEach(element => {
    //console.log('element ', element)
    element.addEventListener("change", (e) => {
      if(e.target.checked){
        console.log('is checked ')
        console.log('e.target.id ', element.id)
        projects.forEach(element => {
         
          document.querySelector('#'+element.id).checked = false

        })
        document.querySelector('#'+element.id).checked = true
        //deseleccionar todos los check
      }
      else{
        console.log('is not checked ')
      }
      
    })
  })
}