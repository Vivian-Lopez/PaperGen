import Papercard from "./papercard"

const number_images = 10;

const Feed = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Array.from({ length: 3 }, (_, index) => <Papercard key={index} />)}
      </div>
    </>
  )
}

export default Feed