window.onload = () => {

  let host = 'http://localhost:666'

  fetch( `${ host }/posts/` )
    .then( ( resp ) => ( resp.json() ) )
    .then( response => {

      response.posts.forEach( element => {
        let id = element.post_id;

        let panel = document.createElement( 'div' );
        panel.dataset.id = id;
        panel.classList.add( 'panel' );
        document.querySelector( '.posts' ).appendChild( panel );

        let votePanel = document.createElement( 'div' );
        votePanel.classList.add( 'votePanel' );
        panel.appendChild( votePanel );

        let textPanel = document.createElement( 'div' );
        textPanel.classList.add( 'textPanel' );
        panel.appendChild( textPanel );

        let upvote = document.createElement( 'div' );
        upvote.classList.add( 'upvote' );
        votePanel.appendChild( upvote );

        let upvoteImg = document.createElement( 'img' );
        upvoteImg.classList.add( 'upvoteImg' );
        upvote.appendChild( upvoteImg );
        upvoteImg.setAttribute( "src", "./assets/upvote.png" );

        let vote = document.createElement( 'div' );
        vote.classList.add( 'vote' );
        vote.textContent = element.vote;
        votePanel.appendChild( vote );

        let downvote = document.createElement( 'div' );
        downvote.classList.add( 'downvote' );
        votePanel.appendChild( downvote );

        let downvoteImg = document.createElement( 'img' );
        upvoteImg.classList.add( 'downvoteImg' );
        downvote.appendChild( downvoteImg );
        downvoteImg.setAttribute( "src", "./assets/downvote.png" );

        let title = document.createElement( 'div' );
        title.dataset.id = id;
        title.classList.add( 'title' );
        title.textContent = element.title;
        textPanel.appendChild( title );

        let url = document.createElement( 'div' );
        url.dataset.id = id;
        url.classList.add( 'url' );
        url.textContent = `(${ element.url })`;
        textPanel.appendChild( url );

        let submitted = document.createElement( 'div' );
        submitted.classList.add( 'submitted' );
        submitted.textContent = `submitted ${ element.timestamp } ago by (${ element.user_id })`;
        textPanel.appendChild( submitted );

        let buttonPanel = document.createElement( 'div' );
        buttonPanel.classList.add( 'buttonPanel' );
        textPanel.appendChild( buttonPanel );

        let edit = document.createElement( 'button' );
        edit.classList.add( 'edit' );
        edit.innerHTML = 'Edit';
        buttonPanel.appendChild( edit );

        let update = document.createElement( 'button' );
        update.classList.add( 'update' );
        update.innerHTML = 'Update Post';

        edit.addEventListener( 'click', () => {

          let form = document.createElement( 'form' );
          form.setAttribute = ( 'method', 'put' );
          form.setAttribute = ( 'action', '/posts/' )
          let newTitle = document.createElement( 'input' );
          newTitle.setAttribute( 'type', "text" );
          newTitle.setAttribute( 'name', "title" );
          newTitle.setAttribute( 'id', "title" );
          let newUrl = document.createElement( 'input' );
          newUrl.setAttribute( 'type', "url" );
          newUrl.setAttribute( 'name', "url" );
          newUrl.setAttribute( 'id', "url" );
          buttonPanel.appendChild( newTitle );
          buttonPanel.appendChild( newUrl );
          buttonPanel.appendChild( update );
          
          update.addEventListener( 'click', () => {
            
            fetch( `${ host }/posts/${ id }/`, {
              method: 'put',
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              title: newTitle.value,
              url: newUrl.value
            })
            
          } )
            .then( ( resp ) => {
              let posts = document.querySelector( '.posts' );
              let titles = document.querySelectorAll( '.title' );
              let urls = document.querySelectorAll('.url');
              
              titles.forEach( ( element ) => {
                if ( id == element.dataset.id ) {
                  element.innerHTML = newTitle.value;
                }
              } );

              urls.forEach( ( element ) => {
                if ( id == element.dataset.id ) {
                  element.innerHTML = newUrl.value;
                }
              } );
            } )
          } );
        } );
          
          let remove = document.createElement( 'button' );
        remove.classList.add( 'remove' );
        remove.innerHTML = 'Remove';
        buttonPanel.appendChild( remove );

        remove.addEventListener( 'click', ( event ) => {
          fetch( `${ host }/posts/${ id }/`, {
            method: 'delete'
          } )
            .then( ( resp ) => {
              let posts = document.querySelector( '.posts' );
              let panels = document.querySelectorAll( '.panel' );

              panels.forEach( ( element ) => {
                if ( id == element.dataset.id ) {
                  posts.removeChild( element );
                }
              } );
            } )
        } );
      } );
    } );
} 