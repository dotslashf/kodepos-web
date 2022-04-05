import { useState } from 'react';
import Cards from '../components/Cards';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [initialSearch, setInitialSearch] = useState(false);

  const onFormSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://kodepos.vercel.app/search?q=${query}`
    );
    const json = await response.json();
    json.data ? setData(json.data) : setData([]);
    setLoading(false);
    setInitialSearch(true);
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-base-100">
      <div className="flex flex-col w-screen items-center px-4 md:px-48 py-32">
        <h1 className="text-4xl text-primary font-bold">kodepos-web</h1>
        <div className="w-full form-control mt-8">
          <form onSubmit={onFormSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Masukkan nama kota, kabupaten, kecamatan, atau desa"
                className="w-full input input-primary focus:outline-none bg-white"
                onChange={e => setQuery(e.target.value)}
              />
              <button
                className={`btn btn-square text-base-100 ${
                  loading ? 'loading' : ''
                }`}
                type="submit"
              >
                {!loading && (
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
                )}
              </button>
            </div>
          </form>
        </div>
        {data?.length > 0 && <Cards results={data} />}
        {data?.length === 0 && initialSearch && (
          <div className="text-center text-secondary mt-8">
            <p>Tidak ditemukan kode pos dengan kata kunci tersebut</p>
          </div>
        )}
      </div>
    </div>
  );
}
