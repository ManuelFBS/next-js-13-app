const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  /* La línea `throw new Error('Error al cargar los comentarios')` arroja un error con el mensaje
  'Error al cargar los comentarios'. Esto significa que si la función `fetchComments` encuentra esta
  línea, dejará de ejecutarse inmediatamente y arrojará un error. */
  // throw new Error('Error al cargar los comentarios')

  /* La línea `return fetch(`https://jsonplaceholder.typicode.com/posts//comments`, {next: {
  revalidate: 60 } })` está realizando una solicitud GET a la URL especificada (`https
  ://jsonplaceholder.typicode.com/posts//comments`) para recuperar los comentarios de una
  publicación específica. */
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#444', fontSize: '12px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <picture>
            <img width='50px' height='50px' alt={comment.name} src={`https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight/${comment.email}`} />
          </picture>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
