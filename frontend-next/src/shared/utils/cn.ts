type ClassValue = string | undefined | null | false;

const cn = (...classes: ClassValue[]) => {
  return classes.filter(Boolean).join(" ");
};

export default cn;