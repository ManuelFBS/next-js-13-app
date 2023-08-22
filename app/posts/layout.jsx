import { Counter } from './Counter'

const PostsLayout = ({ children }) => {
  return (
    <div>
      <Counter />
      {children}
    </div>
  )
}

export default PostsLayout
