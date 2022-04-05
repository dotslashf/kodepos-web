export default function Card({ data }) {
  return (
    <div
      className="card card-compact card-bordered border-primary bg-base-100 rounded-md shadow-md hover:-translate-y-1 translate-x-0 transition cursor-pointer"
      onClick={() => {
        window.open(
          `https://www.google.com/search?q=${data.subdistrict}+${data.city}`,
          '_blank'
        );
      }}
    >
      <div className="card-body">
        <h2 className="card-title text-primary">{data.postalcode}</h2>
        <p>Kota: {data.city}</p>
        <p>Kecamatan: {data.subdistrict}</p>
        <p>Desa / Kelurahan: {data.urban}</p>
        <div className="card-actions">
          <div className="bg-primary px-2 py-1 rounded-md text-base-100 font-semibold">
            {data.province}
          </div>
        </div>
      </div>
    </div>
  );
}
