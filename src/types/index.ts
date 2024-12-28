export type INavLink = {
  title: string;
  href?: string;
  children?: INavLink[];
};

export type IManagement = {
  name: string;
  designation: string;
  image: string;
  quote: string;
};

export type ITestingEquipment = {
  title: string;
  description: string;
  image: string;
};

export type ISafetyAndRegulation = {
  image: string;
  content: React.ReactNode | string;
};

export type ICertificate = {
  title: string;
  image: string;
};

export type ISlide = {
  content: React.ReactNode;
  image: string;
};

export type IFAQ = {
  question: string;
  answer: string | React.ReactNode;
};

export type IPhilosophy = {
  title: string;
  description: string;
  image: string;
};

export type IProduct = {
  uuid: string;
  title: string;
  description: string;
  image: string;
  category: string;
};
