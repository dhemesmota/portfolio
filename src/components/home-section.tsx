import Image from 'next/image';

export default function HomeSection() {
  return (
    <section
      id='home'
      className='mx-auto flex flex-col md:flex-row h-full min-h-[80vh] w-full max-w-screen-xl md:items-center justify-between px-8 py-4'
    >
      <div className='flex flex-col items-start'>
        <p className='text-gray-500'>Olá,</p>
        <h1 className='text-2xl md:text-6xl font-black'>
          EU SOU UM <br />
          DESENVOLVEDOR <br /> DE SOFTWARE
        </h1>
        <p className='mb-8 text-gray-500'>Seja bem-vindo ao meu portfólio</p>
        <button className='rounded-lg bg-gray-800 px-8 py-3 text-white hover:bg-gray-700'>
          Saiba mais sobre mim
        </button>
      </div>

      <div>
        <Image
          src='/hero.svg'
          alt='Hero'
          width={0}
          height={0}
          className='md:h-[60vh] h-full w-full'
        />
      </div>
    </section>
  );
}
