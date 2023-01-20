class ProjectsService {

  constructor() {
    this.URIPROJECTS = "https://status-pcot-projects-production.up.railway.app/api/projects"
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
