const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="images\main_how_to_design_404_page.webp" /> 
              </div>
              <div>
                Photo by <a href="https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png">Agente Content Team</a> on <a href="https://agentestudio.com/blog/10-best-404-error-page-designs">Agente</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
