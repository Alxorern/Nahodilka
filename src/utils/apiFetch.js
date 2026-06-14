/**
 * Разбирает тело ответа как JSON. Если nginx вернул HTML (502/404 страница),
 * вместо SyntaxError даём понятное сообщение.
 */
export async function parseJsonResponse(response) {
  const text = await response.text();
  if (!text) return null;
  const trimmed = text.trim();
  if (trimmed.startsWith('<')) {
    throw new Error(
      `Сервер вернул HTML вместо JSON (HTTP ${response.status}). ` +
        'Проверь: запущен ли Node с server/index.js и проксирует ли nginx /api на этот процесс (часто 502 = бэкенд недоступен).'
    );
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Некорректный ответ API (HTTP ${response.status})`);
  }
}

/**
 * fetch + JSON + проверка response.ok
 */
export async function fetchJson(url, options) {
  const res = await fetch(url, options);
  const data = await parseJsonResponse(res);
  if (!res.ok) {
    const msg =
      data && typeof data.error === 'string' ? data.error : `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return data;
}
