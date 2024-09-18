export function NavbarItems({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      className="text-black dark:text-white cursor-pointer hover:text-grey-300 transition"
      onClick={onClick}
    >
      {label}
    </div>
  );
}
