import NavbarButton from "../components/NavbarButton";

export default function Navbar() {
  return (
    <div className="bg-red-100 h-[100px] flex justify-between px-12 items-center">
      <div className="">
        <a href="/">LOGO</a>
      </div>
      <div className="flex gap-6">
        <NavbarButton title="HOME" href="/" />
        <NavbarButton title="EDUCATION" href="" />
        <NavbarButton title="ABOUT" href="/about" />
      </div>
    </div>
  );
}
