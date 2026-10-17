import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'productos/editar/:id',
    renderMode: RenderMode.Server // En lugar de Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];