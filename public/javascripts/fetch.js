const host = 'http://localhost:3000/'

const parseResponse = response => Promise.resolve( JSON.parse( response ) )

/**
 * @param {string} id
 */
const fetchProfile = id => {
  const requestUrl = host + 'profile?id=' + encodeURI( id )
  return fetch( requestUrl )
           .then( parseResponse )
}

/**
 * @param {string} lang
 * @param {Array} ranks
 */
const fetchSearchedList = ( lang, ranks ) => {
  const requestUrl = host + 'search?lang=' + encodeURI( lang ) + '&ranks=' + encodeURI( ranks.join( ',' ) )
  return fetch( requestUrl )
           .then( parseResponse )
}
