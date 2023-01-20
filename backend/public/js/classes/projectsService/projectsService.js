class ProjectsService {

  constructor() {
    this.URIPROJECTS = "http://localhost:3000/api/projects"
    this.projectsDataBase
  }

  async getProjects() {
    const response = await fetch(this.URIPROJECTS)
    console.log(response, ' Projects')
    //console.log(response, ' Projects')
    this.projectsDataBase = await response.json()
    //console.log(this.projectsDataBase, ' this.projectsDataBase')
    return this.projectsDataBase
    
  }

}

export { ProjectsService }
