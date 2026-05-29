export interface PreviewTarget {
  id: string;
  preview_domain?: string | null;
  port?: number;
}

// Template can use placeholders: {id}, {domain}, {port}
// Default matches existing behavior: http://3000-{id}.{domain}
export function buildPreviewUrl(target: PreviewTarget): string {
  const template = process.env.NEXT_PUBLIC_PREVIEW_URL_TEMPLATE || 'http://3000-{id}.{domain}';
  const domain = target.preview_domain || 'localhost';
  const port = typeof target.port === 'number' ? String(target.port) : '3000';
  return template.replace(/{id}/g, target.id).replace(/{domain}/g, domain).replace(/{port}/g, port);
}

export default buildPreviewUrl;
