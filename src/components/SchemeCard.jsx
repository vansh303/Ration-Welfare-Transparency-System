export default function SchemeCard({ title, desc }) {
  return (
    <div className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </div>
  );
}
