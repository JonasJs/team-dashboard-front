import { readFileSync } from 'fs';
import { join } from 'path';
const filePath = join(process.cwd(), 'db.json');
const data = JSON.parse(readFileSync(filePath, 'utf-8'));

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { _page = '1', _limit = '10', q = '' } = req.query;

  const page = parseInt(_page, 10);
  const limit = parseInt(_limit, 10);
  const query = q.toLowerCase();

  const filtered = data.employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(query) ||
      employee.job.toLowerCase().includes(query) ||
      employee.phone.toLowerCase().includes(query)
    );
  });

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filtered.slice(start, end);

  res.setHeader('X-Total-Count', filtered.length.toString());
  res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
  res.status(200).json(paginated);
}
