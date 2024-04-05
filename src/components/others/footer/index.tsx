import dayjs from "dayjs";

export default function Footer() {
  const year = dayjs().format("YYYY");

  return (
    <footer className="absolute flex h-16 w-full mx-auto bg-primary-color items-center justify-center bottom-0">
      <aside className="text-white">
        Copyright © {year} MeuMenu - Todos os direitos reservados
      </aside>
    </footer>
  );
}
