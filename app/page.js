'use client'
import Navbar from '@/components/Navbar';
import Todo from '@/components/Todo';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form handling code here
  };

  return (
    <>
      <Navbar />
      <section className="w-full md:w-70 py-24 px-2 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="w-full px-3 py-2 h-10 outline-none border border-purple-500 text-black"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              className="w-full px-3 py-2 h-10 outline-none border border-purple-500 text-black"
              placeholder="Enter description"
              rows={8} cols={30}
            />
          </div>
          <div>
            <button className="bg-purple-600 hover:bg-purple-700 m-2 p-2" type="submit">
              Add todo
            </button>
          </div>
        </form>
        <div>
          <Todo/>
        </div>
      </section>
    </>
  );
}
