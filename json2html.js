// json2html.js

export default function json2html(data) {
  // Extract column headers by getting unique keys from all objects
  const columns = Array.from(new Set(data.flatMap(Object.keys)));
  
  // Build HTML for the table structure
  let html = `<table data-user="sakethkumar051@gmail.com">`;
  
  // Create table header with column names
  html += `<thead><tr>`;
  for (const column of columns) {
    html += `<th>${column}</th>`;
  }
  html += `</tr></thead>`;
  
  // Create table body with row data
  html += `<tbody>`;
  for (const row of data) {
    html += `<tr>`;
    for (const column of columns) {
      html += `<td>${row[column] !== undefined ? row[column] : ''}</td>`;
    }
    html += `</tr>`;
  }
  html += `</tbody></table>`;
  
  // Return the generated HTML string
  return html;
}
