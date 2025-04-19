export const API_ROOT = "http://127.0.0.1:8000";

export async function post<T>(path: string, body: any): Promise<T> {
  const res = await fetch(`${API_ROOT}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
