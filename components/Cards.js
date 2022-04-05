import Card from './Card';

export default function Cards({ results }) {
  return (
    <div className="w-full mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {results.map((data, i) => {
        return <Card data={data} key={i} />;
      })}
    </div>
  );
}
