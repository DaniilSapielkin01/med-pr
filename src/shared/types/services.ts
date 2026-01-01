export interface ServiceItem {
  title: string;
  price: string;
  note?: string;
}

export interface ServiceGroup {
  title: string;
  list: ServiceItem[];
}

export interface Indication {
  header?: string;
  title: string;
  items?: string[];
  note?: string;
}

export interface ServicesData {
  title: string;
  icon: string;
  desc?: string;
  indications?: Indication[];
  services: ServiceGroup[];
}
