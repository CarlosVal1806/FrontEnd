const AppPage = () => {
  return <h2>Página para pacientes</h2>
}

AppPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default AppPage
