import Cards from '../components/Cards';

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full bg-base-100">
      <div className="flex flex-col w-screen items-center px-4 md:px-48 py-32">
        <h1 className="text-4xl text-primary font-bold tracking-wider">
          kodepos
        </h1>
        <div className="w-full form-control mt-8">
          <div className="input-group">
            <input
              type="text"
              placeholder="Masukkan nama kota, kabupaten, kecamatan, atau desa"
              className="w-full input input-primary focus:outline-none"
            />
            <button className="btn btn-square text-base-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
}
