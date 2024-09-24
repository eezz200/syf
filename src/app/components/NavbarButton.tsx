import Link from "next/link";

type NavbarButtonProps = {
  title?: string;
  href: string;
};

export default function NavbarButton({ title, href }: NavbarButtonProps) {
  return (
    <Link href={href}>
      <div className="hover:border-b-2 border-black">{title}</div>
    </Link>
  );
}
