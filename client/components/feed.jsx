import Papercard from "./papercard"

const Feed = () => {
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-between">
          <div className="p-2"><Papercard /></div>
          <div className="p-2"><Papercard /></div>
          <div className="p-2"><Papercard /></div>
      </div>
    </>
  )
}

export default Feed