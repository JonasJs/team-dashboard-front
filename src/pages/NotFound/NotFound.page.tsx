import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export function NotFound() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>{error.status} - Página não encontrada</h1>
        <p>{error.statusText}</p>
      </>
    );
  }

  if (error instanceof Error) {
    return (
      <>
        <h1>Algo deu errado</h1>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <>
      <h1>Algo deu errado</h1>
      <p>Erro desconhecido</p>
    </>
  );
}
