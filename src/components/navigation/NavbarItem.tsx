interface Props {
  label: string;
}

function NavbarItem({ label }: Props) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
}

export default NavbarItem;
