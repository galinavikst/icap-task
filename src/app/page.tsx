import Image from "next/image";

export default function Home() {
  return (
    <main className="relative max-w-screen-xl mx-auto box-border ">
      <div className="flex relative p-7 h-[100vh] w-full">
        <div className="flex flex-col gap-16 w-1/2 h-full">
          <Image src="/logo.png" width={105} height={25} alt="logo" />
          <div className="flex flex-col gap-2.5">
            <p className="text-4xl font-medium">Hi!👋</p>
            <h2 className="text-xl font-normal text-neutral-400">
              Welcome to MacPaw Bootcamp 2023
            </h2>
          </div>
          <div>
            <p className="text-xl font-medium">Lets start using The Cat API</p>
            <nav className="flex gap-4 flex-wrap py-2.5">
              <div className="group cursor-pointer flex flex-col gap-2.5 ">
                <div className="border-4 border-indigo-300/60 group-hover:border-indigo-300 w-[140px] h-[200px] flex justify-center items-center bg-indigo-300 rounded-2xl ">
                  <Image
                    src="/vote-table.png"
                    width={100}
                    height={100}
                    alt="vote table"
                  />
                </div>
                <button className="w-full bg-white group-hover:bg-red-100 rounded-lg py-2.5 text-rose-400 text-xs font-medium tracking-widest">
                  VOTING
                </button>
              </div>
              <div className="group cursor-pointer flex flex-col gap-2.5">
                <div className="border-4 border-green-300/60 group-hover:border-green-300 w-[140px] h-[200px] flex justify-center items-center bg-green-300 rounded-2xl">
                  <Image
                    src="/pet-breeds.png"
                    width={100}
                    height={100}
                    alt="cat"
                  />
                </div>
                <button className="w-full bg-white group-hover:bg-red-100 rounded-lg py-2.5 text-rose-400 text-xs font-medium tracking-widest">
                  BREEDS
                </button>
              </div>
              <div className="group cursor-pointer flex flex-col gap-2.5 ">
                <div className="border-4 border-amber-200/60 group-hover:border-amber-200 w-[140px] h-[200px] flex justify-center items-end bg-amber-200 rounded-2xl">
                  <Image
                    src="/images-search.png"
                    width={100}
                    height={100}
                    alt="hand holds phone"
                  />
                </div>
                <button className="w-full bg-white group-hover:bg-red-100 rounded-lg py-2.5 text-rose-400 text-xs font-medium tracking-widest">
                  GALLERY
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="bg-red-100 w-[50%] h-full rounded-2xl"></div>
      </div>
      <div className="absolute w-[55%] h-[100vh] right-0 top-0">
        <Image
          src="/girl-and-pet-1.png"
          layout="fill"
          alt="girl with pet"
          priority={true}
        />
      </div>
    </main>
  );
}
