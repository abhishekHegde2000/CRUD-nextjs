import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
  <form>
    <Navbar />
    <section className="w-full md:w-[70%] py-24 px-2 mx-auto">
      <div className="mb-3">
        <input
          type="text"
          className="w-full px-3 py-2 h-10 outline-none border border-purple-500 text-black"
          placeholder='enter title'
        />
      </div>
      <div className="mb-3">
        <textarea
          type="text"
          className="w-full px-3 py-2 h-10 outline-none border border-purple-500 text-black"
          placeholder='enter description' rows= {8} cols={30}
        />
      </div>
      <div>
        <button className='bg-purple-600 hover:bg-purple-700 m-2 p-2'>
              add todo
        </button>
      </div>
    </section>
  </form>
    </>
  );
}
