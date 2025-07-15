import { api } from '@/http/api';
import type { Employee } from './employee.types';
import type { GetEmployeesParams } from './employee.dto';

/**
 * IMPORTANTE:
 * A regra de negocio pede que seja possivel filtrar por cargo, nome e telefone, mas filtros em listagens pensando em escalibidade não é o ideal fazer via front end:
 * Como estamos utilizando `json-server` ele busca full-text em todas as propriedades, como não é possivel implementar de forma limitada os parametro em uma aplicação real alinharia o contrato da api com o back antes de iniciar, mas nesse caso como pricisei replicar o `json-server`para que seja possivel deixar o projeto online, criei a logica do filtro e a limitação dos parametros.
 * @/api/employees.ts
 *
 */
export async function getEmployees({
  page = 1,
  limit = 100,
  search = '',
}: GetEmployeesParams = {}): Promise<Employee[]> {
  return api
    .get('employees', {
      searchParams: {
        _page: page,
        _limit: limit,
        q: search,
      },
    })
    .json<Employee[]>();
}
