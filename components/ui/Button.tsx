import clsx from "clsx";

type Props = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ variant = "primary", children }: Props) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-2xl transition-all duration-300",
        variant === "primary" &&
          "bg-energy text-white hover:shadow-lg hover:-translate-y-0.5",
        variant === "secondary" &&
          "border border-green text-green hover:bg-green/5"
      )}
    >
      {children}
    </button>
  );
}
