export default function Cards({ results }) {
  return (
    <div className="w-full mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(8).keys()].map(i => {
        return (
          <div
            key={i}
            className="card card-compact card-bordered border-primary bg-base-100 rounded-md shadow-md hover:-translate-y-1 translate-x-0 transition cursor-pointer"
            onClick={() => {
              window.open(
                'https://www.google.com/search?q=panakkukang+makassar',
                '_blank'
              );
            }}
          >
            <div className="card-body">
              <h2 className="card-title text-primary">90231</h2>
              <p>Kota: Makassar</p>
              <p>Kecamatan: Panakkukang</p>
              <p>Desa / Kelurahan: Tello Baru</p>
              <div className="card-actions">
                <div className="bg-primary px-2 py-1 rounded-md text-base-100 font-semibold">
                  Sulawesi selatan
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
