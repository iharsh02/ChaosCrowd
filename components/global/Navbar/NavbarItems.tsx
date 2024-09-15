export function NavbarItems({ label }: { label: string }) {
  return (
    <div className="text-black dark:text-white cursor-pointer hover:text-grey-300 transition">
      {label}
    </div>
  );
}
