export interface PreviewTarget {
  id: string;
  preview_domain?: string | null;
  port?: number;
}

// Template can use placeholders: {id}, {domain}, {port}
// Default matches existing behavior: http://3000-{id}.{domain}
export function buildPreviewUrl(target: PreviewTarget): string {
  // If preview_domain already looks like a full URL, return it (with optional port)
  const raw = target.preview_domain || '';
  if (/^https?:\/\//i.test(raw)) {
    // Append port if provided and not already present
    const port = target.port ? `:${target.port}` : '';
    return raw.replace(/:\d+$/, '') + port;
  }

  const template = process.env.NEXT_PUBLIC_PREVIEW_URL_TEMPLATE || 'http://3000-{id}.{domain}';
  const domain = raw || 'localhost';
  const port = typeof target.port === 'number' ? String(target.port) : '3000';
  const url = template.replace(/{id}/g, target.id).replace(/{domain}/g, domain).replace(/{port}/g, port);

  // Ensure protocol is present — default to https when domain looks remote
  if (!/^https?:\/\//i.test(url)) {
    if (domain === 'localhost' || domain.match(/^127\.|^localhost$/)) {
      return `http://${url}`;
    }
    return `https://${url}`;
  }

  return url;
}

export default buildPreviewUrl;
