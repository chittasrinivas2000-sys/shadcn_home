import { Button } from "@/components/ui/button"
const HeadingSection = () => {
  return (
   <section className="w-full overflow-x-hidden py-8 md:py-16 text-center">
  
  {/* Top Badge */}
  <div className="px-4">
    <Button className="bg-gray-50 text-black rounded-full text-sm md:text-base px-4 py-2">
      RTL Support -
    </Button>
  </div>

  {/* Content */}
  <div className="mx-auto mt-6 px-4 max-w-3xl">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
      The Foundation for Your Design System
    </h1>

    <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
      A set of beautifully designed components that you can customize,
      extend, and build on. Start here then make it your own.
      Open Source. Open Code.
    </p>
  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 px-4">
    <Button className="bg-black text-white rounded w-full sm:w-auto px-6 py-2">
      Get Started
    </Button>

    <Button className="bg-gray-50 text-black rounded w-full sm:w-auto px-6 py-2">
      View Components
    </Button>
  </div>

</section>
  )
}

export default HeadingSection
3