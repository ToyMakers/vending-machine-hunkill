interface drinks {
  name: string;
  count: number;
  cost: number;
  afford: boolean;
}

interface outputs {
  infos: drinks[];
  text: string;
}

export type { drinks, outputs };
