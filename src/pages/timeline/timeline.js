import { logout, auth } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  container.id = 'container-timeline';
  /*const chef = auth.currentUser.displayName;
  const chef1 = chef.split(' ')[0];//eslint-disable-line*/

  container.innerHTML = `
    <section id="header-timeline">
        <figure class="box">
            <img id="gif-timeline" src="assets/104313-cooking-chef.gif">
        </figure>
        <div id="text-header">
          <p> Olá, ${auth.currentUser.displayName}!</p>
          <h3>O que vamos cozinhar hoje?</h3>
        </div>
    </section>  
    <section id="body-timeline">
        <div id="post-timeline"> 
          <input type=text id="post-text">
          <input type="submit" value="Publicar" id="btn-publish">
        </div> 
        <nav>
            <ul>
              <li><a id="btn-home"><i class="fa-solid fa-house fa-2xl"></i></a></li>
              <li><a id="btn-logout"><i class="fa-solid fa-right-from-bracket fa-2xl"></i></a></li>
            </ul>
        </nav>
        
      </section> 

    
    
    `;

  const btnLogout = container.querySelector('#btn-logout');
  const btnHome = container.querySelector('#btn-home');
  
  // const btnPublish = container.querySelector('#btn-publish');

  // btnPublish.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   const recipe = {
  //     textRecipe: container.querySelector('#post-text').value,
  //     date: new Date(),
  //     userUid: auth.currentUser.uid,
  //     author: chef,
  //   };
  //   if (recipe !== '') {
  //     recipePost(recipe);
  //   }
  // });

  btnHome.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btnLogout.addEventListener('click', () => {
    logout()
      .then(() => {
        window.location.hash = '#login';
      });
  });

  
  return container;
};
