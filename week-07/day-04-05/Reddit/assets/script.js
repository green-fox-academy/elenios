window.onload = () => {

  let host = 'http://localhost:666'

  fetch( `${ host }/posts/` )
    .then( ( resp ) => ( resp.json() ) )
    .then( response => {

      response.posts.forEach( element => {

        let panel = document.createElement( 'div' );
        panel.classList.add( 'panel' );
        document.querySelector( '.posts' ).appendChild( panel );

        let votePanel = document.createElement( 'div' );
        votePanel.classList.add( 'votePanel' );
        panel.appendChild( votePanel );

        let textPanel = document.createElement( 'div' );
        textPanel.classList.add( 'textPanel' );
        panel.appendChild( textPanel );

        let upvote = document.createElement( 'div' );
        upvote.classList.add( 'upvote'); 
        votePanel.appendChild( upvote );

        let upvoteImg = document.createElement('img');
        upvoteImg.classList.add('upvoteImg');
        upvote.appendChild(upvoteImg);
        upvoteImg.setAttribute("src", "./assets/upvote.png");

        let vote = document.createElement( 'div' );
        vote.classList.add( 'vote' );
        vote.textContent = element.vote;
        votePanel.appendChild( vote );

        let downvote = document.createElement( 'div' );
        downvote.classList.add( 'downvote' );
        votePanel.appendChild( downvote );

        let downvoteImg = document.createElement('img');
        upvoteImg.classList.add('downvoteImg');
        downvote.appendChild(downvoteImg);
        downvoteImg.setAttribute("src", "./assets/downvote.png");

        let title = document.createElement( 'div' );
        title.classList.add( 'title' );
        title.textContent = element.title;
        textPanel.appendChild( title );

        let url = document.createElement( 'div' );
        url.classList.add( 'url' );
        url.textContent = `(${ element.url })`;
        textPanel.appendChild( url );

        let submitted = document.createElement( 'div' );
        submitted.classList.add( 'submitted' );
        submitted.textContent = `submitted ${ element.timestamp } ago by (${ element.user_id })`;
        textPanel.appendChild( submitted );

      } );
    } );
}