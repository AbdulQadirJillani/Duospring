import { Button } from "./ui/button"

const CTAbtn = () => {
  return (
    <a href="mailto:mikiyasaddis73@gmail.com" target="_blank" className="">
      <Button size="lg" className="w-full flex justify-center items-center gap-2 bg-[#426cf5] text-white hover:bg-[#4242f5] active:scale-95 group">
          <span className="font-bold text-lg">Get a Quote</span>
          <i className="pi pi-chevron-right font-bold group-hover:translate-x-1"/>
      </Button>
    </a>
  )
}

export default CTAbtn