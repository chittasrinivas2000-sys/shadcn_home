import { Button } from "@/components/ui/button"
const HeadingSection = () => {
  return (
    <section className="w-full py-6 text-center">
        <Button className="bg-gray-50 text-black rounded-full">RTL Support -</Button>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          The Foundation for Your design system 
        </h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
        A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.
        </p>
      </div>
      <div className="flex justify-center gap-3 w-full m-4">
         <Button className="bg-black text-white rounded">Get Started</Button>
        <Button className="bg-gray-50 text-black rounded">View Components</Button>

      </div>
    </section>
  )
}

export default HeadingSection
3