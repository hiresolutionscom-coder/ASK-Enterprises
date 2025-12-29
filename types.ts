
export interface Client {
  name: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Leader {
  name: string;
  title: string;
  values: string[];
}

export interface Highlight {
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}
