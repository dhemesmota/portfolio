import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="flex w-full mx-auto max-w-screen-xl px-8 py-4  items-center justify-between min-h-[80vh] h-full">
      <div>
        <p className="text-gray-500">Olá,</p>
        <h1 className="text-6xl font-black ">EU SOU UM <br/>DESENVOLVEDOR <br/> DE SOFTWARE</h1>
        <p className="text-gray-500 mb-8">Seja bem-vindo ao meu portfólio</p>
        <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
          Saiba mais sobre mim
        </button>
      </div>

      <div>
        <Image src="/hero.svg" alt="Hero" width={0} height={0} className="w-full h-[60vh]" />
      </div>
    </section>
  );
}
