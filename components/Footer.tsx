export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-center text-sm">
        © {new Date().getFullYear()} genios electronicos · Hecho con ♥ by{" "}
        <a
          href="mailto:kathmene27@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Catalina Meneses
        </a>{" "}
        en Canadá
      </div>
    </footer>
  );
}
