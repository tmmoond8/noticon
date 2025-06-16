export const normalizeMap = ({
  id,
  attributes,
}: {
  id: number;
  attributes: any;
}) => {
  return {
    id,
    ...attributes,
  };
};

interface StrapiAttributes {
  [key: string]: any;
}

interface StrapiEntity<T> {
  id?: string | number;
  attributes: T;
  [key: string]: any;
}

interface StrapiResponse<T> {
  data: T | StrapiEntity<T> | StrapiResponse<T>;
  [key: string]: any;
}

export function unwrapStrapiData<T>(
  response: StrapiResponse<T> | T | null,
): T | null {
  if (!response || typeof response !== 'object') return response;

  if (Array.isArray(response)) {
    return response.map(unwrapStrapiData) as unknown as T;
  }

  if ('data' in response) {
    return unwrapStrapiData(response.data) as T;
  }

  if ('attributes' in response) {
    const { attributes, id, ...rest } = response as StrapiEntity<T>;
    const unwrappedAttributes = unwrapStrapiData(attributes);

    return { id, ...unwrappedAttributes, ...rest } as unknown as T;
  }

  if (typeof response === 'object') {
    return Object.fromEntries(
      Object.entries(response).map(([key, value]) => [
        key,
        unwrapStrapiData(value),
      ]),
    ) as unknown as T;
  }

  return response as T;
}
