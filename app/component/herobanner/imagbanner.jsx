import Image from 'next/image'

export default function ImgBanner(){

    return(
        <div className="flex justify-center p-8 mt-12 mb-6 ml-0 md:mb-0 md:mt-0 md:ml-12 lg:w-2/3">
  <div className="mr-8 transition-transform duration-300 transform group hover:scale-110">
    <Image src="/left.jpeg" className="object-cover h-64 cursor-pointer" alt="Picture of the author"
      width={500}
      height={500} />
  </div>
  <div className="mr-8 transition-transform duration-300 transform group hover:scale-110">
    <Image src="/midle.jpeg" className="object-cover h-64 cursor-pointer" alt="Picture of the author"
      width={500}
      height={500} />
  </div>
  <div className="transition-transform duration-300 transform group hover:scale-110">
    <Image src="/rigth.jpeg" className="object-cover h-64 cursor-pointer" alt="Picture of the author"
      width={500}
      height={500} />
  </div>
</div>

    )
}