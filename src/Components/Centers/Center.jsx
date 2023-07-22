
function Center({ center }) {
  const { id, service, divisionna, phonenumbe, address, city, zipcode } = center;
  const fullAddress = `${address}, ${city}, NY ${parseInt(zipcode)}`;

  return (
    <tr className="center-table-row">
      <td>{parseInt(id)}</td>
      <td>{service}</td>
      <td>{divisionna}</td>
      <td>{phonenumbe}</td>
      <td>{city}</td>
      <td>
        <a
          href={`http://maps.google.com/?q=${fullAddress}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {address}
        </a>
      </td>
    </tr>
  );
}

export default Center;