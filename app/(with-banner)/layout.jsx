// import { Counter } from './Counter'

const PostsLayout = ({ children }) => {
  return (
    <div style={{ marginTop: '5px' }}>
      {/* <Counter /> */}
      {/* <small>Home &bull; Posts</small> */}
      <marquee style={{ background: '#00b', fontFamily: 'Singapore Sling Expanded', fontStyle: 'italic', fontSize: '18px', color: '#ef0' }}>Curso de Next.js @midudev: Mi primera app...</marquee>
      {children}
    </div>
  )
}

export default PostsLayout
