import toast from 'react-simple-toasts';

export default function Card({ data }) {
  return (
    <div
      className="card card-compact card-bordered border-primary bg-white rounded-md shadow-md hover:-translate-y-1 translate-x-0 transition cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(data.postalcode);
        toast(`Kode pos ${data.urban.toLowerCase()} berhasil disalin`);
      }}
    >
      <div className="card-body text-secondary">
        <h2 className="card-title flex justify-between">
          {data.urban}
          <br />
          <div className="bg-primary px-2 py-1 rounded-md text-base-100 font-semibold">
            {data.postalcode}
          </div>
        </h2>
        <p>
          Kota: {data.city}
          <br />
          Kecamatan: {data.subdistrict}
        </p>
        <div className="card-actions">
          <div className="bg-primary px-2 py-1 rounded-md text-base-100 font-semibold text-xs">
            {data.province}
          </div>
        </div>
      </div>
    </div>
  );
}
