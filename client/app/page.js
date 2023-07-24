import Search from "@/components/search"
import Feed from "@/components/feed"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">

      {/* displays the main Title for this page: */}
      <h1 className="head_text">
        Generate Wallpaper
      </h1>

      {/* displays the search bar: */}
      <div className="pt-10 w-2/6">
        <Search/>
      </div>

      {/* displays the feed of wallpapers: */}
      <div className="pt-10">
        <Feed/>
      </div>
      
    </div>
  )
}