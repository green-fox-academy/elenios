const host = 'http://localhost:3000/api';
const http = new XMLHttpRequest();

window.onload = () => {
  document.querySelector( 'button' ).addEventListener( 'click', () => {
    event.preventDefault();
    let input = document.querySelector( '#name' ).value;

    http.open( 'GET', `${ host }?keyword=${ input }`, true );

    http.onload = () => {
      if ( http.status === 200 ) {
        const url = JSON.parse( http.response );

        http.open( 'GET', `${ url }`, true );
        http.onload = () => {

          let result = JSON.parse( http.response );
          console.log( result );


          result.results.forEach( element => {
            let name = element.name;
            let url = element.url;
            let requestDiv = document.createElement( 'div' );
            requestDiv.classList.add( 'request' );
            requestDiv.textContent = name;
            document.querySelector( 'body' ).appendChild( requestDiv );
            
            requestDiv.addEventListener( 'click', () => {
              http.open( 'GET', `https://swapi.co/api/films`, true );
              http.onload = () => {
                
                let films = JSON.parse( http.response );
                console.log( films.results );
                console.log( name );
                
                console.log( url );
                
                
                let actedInTheseFilms = films.results.filter( ( elem ) => 
                
                elem.characters.some( ( unit ) => unit === url ) 
                
                
                );
                actedInTheseFilms.forEach((elemke) => {
                  
                  let responseDiv = document.createElement( 'div' );
                  responseDiv.classList.add( 'response' );
                  responseDiv.textContent = elemke.title;
                  document.querySelector( 'body' ).appendChild( responseDiv );
                });
                 
              }
              http.send();
            } );
            
            
          } );
        }
      }
      http.send();
    }
    http.send();
  } );
}