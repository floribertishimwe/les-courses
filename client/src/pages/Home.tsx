
import Hero from "../components/home/Hero"
import Features from "../components/home/Features"
import HomeCategories from "../components/HomeCategories"
import PopularProducts from "../components/home/PopularProducts"
import AppPromoBanner from "../components/home/AppPromoBanner"
import Newsletter from "../components/home/Newsletter"

const home = () => {
  return (
    <div className=" min-h-screen max-w-7xl  mx-auto px-4 sm:px-6  lg:px-8 py-12 ">
      < Hero />
      <Features/>
      <HomeCategories/>
      <PopularProducts/>
      <AppPromoBanner/>
      <Newsletter/>
    </div>
  )
}

export default home