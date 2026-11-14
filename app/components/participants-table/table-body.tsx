export default function TableBody() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <tr>
          <td className="border border-gray-300 p-2">Дата</td>
          <td className="border border-gray-300 p-2">ФИО</td>
          <td className="border border-gray-300 p-2">Количество</td>
        </tr>
      </table>
    </div>
  );
}
