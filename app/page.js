import Search from "@/components/search"
import Feed from "@/components/feed"

export default function Home() {
  return (
    <section>
      <br />
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex justify-center items-center head_text orange_gradient">
          Find Wallpapers
        </h1>
        <div className="pt-10">
          <Search/>
        </div>
        <div className="pt-10">
          <Feed/>
        </div>
      </div>
    </section>
  )
}