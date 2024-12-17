import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#F9FAFA] group/design-root overflow-x-hidden"
      // style='font-family: Lexend, "Noto Sans", sans-serif;'
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="container flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#EEEFF2] px-4 sm:px-10 py-3 fixed top-0 bg-white inset-x-0">
          <div className="flex items-center gap-4 text-[#1C1D22]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#1C1D22] text-lg font-bold leading-tight tracking-[-0.015em]">
              Pojok Baca Digital
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="hidden items-center gap-9 sm:flex">
              <a
                className="text-[#1C1D22] text-sm font-medium leading-normal"
                href="#"
              >
                Book Catalog
              </a>
              <a
                className="text-[#1C1D22] text-sm font-medium leading-normal"
                href="#"
              >
                About the Library
              </a>
              <a
                className="text-[#1C1D22] text-sm font-medium leading-normal"
                href="#"
              >
                Contact
              </a>
            </div>
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#EEEFF2] text-[#1C1D22] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#1C1D22]"
                  data-icon="MagnifyingGlass"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#EEEFF2] text-[#1C1D22] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#1C1D22]"
                  data-icon="Bookmark"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            {/* <div className="bg-center bg-no-repeat bg-[url('https://cdn.usegalileo.ai/sdxl10/1b452cd8-05dc-4af1-9587-6676874702dc.png')] aspect-square bg-cover rounded-full size-10"></div> */}
          </div>
        </header>
        <div className="px-4 sm:px-40 pt-24 flex flex-1 justify-center pb-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 pb-24">
            <div className="@container">
              <div className="sm:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-[url('https://cdn.usegalileo.ai/sdxl10/d354dd32-b3e7-4346-93d6-29ecd73da2ef.png')] bg-cover bg-center bg-no-repeat sm:gap-8 lg:rounded-xl items-start justify-end px-4 pb-10 sm:px-10"
                  // style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/d354dd32-b3e7-4346-93d6-29ecd73da2ef.png");'
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
                      Welcome to Kids Library
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal">
                      Explore our collection of books and audiobooks for
                      children, tweens, and teens
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-[#1C1D22] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Featured
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/96be1643-5d44-4b11-855d-cb82396db0ba.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  The Hobbit
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/27f095a5-b2e0-41a7-af4b-7040fbb05960.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Harry Potter and the Sorcerer's Stone
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/578adee3-9992-4e2b-beb7-8fbceb639238.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Percy Jackson and the Olympians: The Lightning Thief
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/7cc558e4-3329-41f5-aaf2-12a341dd80b3.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  The Lion, the Witch and the Wardrobe
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/01bbbd4d-2cd0-4489-902e-a91f2aa726ba.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Alice's Adventures in Wonderland
                </p>
              </div>
            </div>
            <h2 className="text-[#1C1D22] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Popular Series
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/fc5bd317-76d0-4f2a-8306-a6da2f69ed01.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Harry Potter
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/31fa8633-6800-48f3-babe-5ff41536028e.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Diary of a Wimpy Kid
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/3ca1441b-8074-4ca3-99bd-3751e7c42571.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Percy Jackson
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/fe31ccdb-db7e-48d1-85bd-7ac159f6f2b2.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Magic Tree House
                </p>
              </div>
            </div>
            <h2 className="text-[#1C1D22] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Audiobooks for Kids
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/f6f57915-69ae-48a6-96ef-ae1fe0a74fd2.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Matilda
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/24a8dc41-81ec-4e52-af03-e41067ec0a66.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  Charlie and the Chocolate Factory
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-[url('https://cdn.usegalileo.ai/sdxl10/66a3d248-e678-4cec-9af7-5ad8238bde27.png')] bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                <p className="text-[#1C1D22] text-base font-medium leading-normal">
                  The BFG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
