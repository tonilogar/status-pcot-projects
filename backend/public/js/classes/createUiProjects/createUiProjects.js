import { ProjectsService } from '../projectsService/projectsService.js'


const projectsService = new ProjectsService()

class CreateUiProjects {
  constructor() {
    this.dataBase
  }



  async renderUiProjects() {
    const projectsContainer = document.querySelector('.dataProjects')
    this.dataBase = await projectsService.getProjects()
    this.dataBase.forEach(element => {
      //console.log('elementt ', element)
      const divProject = document.createElement('div')
      divProject.setAttribute('class', 'divProject')
      divProject.style.height='28px'
      divProject.style.borderStyle='ridge'

      
      let createIdInput = element.projectName.replace(/\s+/g, '')
      let createIdInput01 = createIdInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      let createIdInput02 = createIdInput01.replace(/[\(\)\.\/\\:]/g, "");
      let createIdInput03 = createIdInput02.replace(".", "");

      
      //console.log(createIdInput, ' createIdInput ', createIdInput01, '  ' ,createIdInput02 )
      const inputProject = document.createElement('input')
      //inputProject.setAttribute('class', createClassInput)
      inputProject.setAttribute('class', 'inputProject')
      inputProject.setAttribute('id', createIdInput03)
      inputProject.setAttribute('background', element.projectName)
      inputProject.setAttribute('value', element.projectName)
      //inputProject.checked = true
      inputProject.type = 'checkbox'
      inputProject.style.height = '20px'
      inputProject.style.width = '20px'
      inputProject.style.marginTop = '1px'
      divProject.appendChild(inputProject)



      const pProject = document.createElement('p')
      const pTextBackground = document.createTextNode(element.projectName);
      pProject.style.marginTop = '-22px'
      pProject.style.marginLeft = '25px'
      pProject.style.marginRight = '5px'
      pProject.appendChild(pTextBackground)
      divProject.appendChild(pProject)


      projectsContainer.appendChild(divProject)
      
    })

  
  }

}


export { CreateUiProjects }
