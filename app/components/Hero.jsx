import Button from "./Ui/Button"

const Hero = () => {
  return (
    <div className="h-[calc(100vh-90px)] flex flex-col bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden" style={{backgroundImage: `url(/art.avif)`, backgroundPosition: '0 360px'}}>
        <h1 className="text-[#25221e] leading-[50px] text-5xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mx-auto w-full sm:w-[500px] md:w-[600px] text-center  font-graphik md:leading-[77px] mt-20 mb-10">
            Organize your work and&nbsp;life,&nbsp;finally!
        </h1>
        <p className="w-[90%] sm:w-[500px] md:w-[650px] text-xl sm:text-2xl font-roboto mx-auto text-center text-[#666360]">Become focused, organized, and productive with Taskade. One of the most used project manager and collab tool.</p>
        <Button type="primary" href="/login" className="mt-4 mx-auto">
              Start for free
        </Button>
    </div>
  )
}

export default Hero