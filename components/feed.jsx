import Papercard from "./papercard"

const Feed = () => {
  return (
    <div className="flex flex-row justify-between">
        <div className="p-3"><Papercard /></div>
        <div className="p-3"><Papercard /></div>
        <div className="p-3"><Papercard /></div>
    </div>
  )
}

export default Feed