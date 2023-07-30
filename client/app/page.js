import Search from "@/components/search"
import Feed from "@/components/feed"

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center">

      {/* displays the main Title for this page: */}
      <h1 className="head_text">
        Generate Wallpaper
      </h1>

      {/* displays the search bar which in turn conditionally displays images */}
      <Search/>
      
    </section>
  )
}