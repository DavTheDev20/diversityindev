export default function Jumbotron({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-52 w-full flex items-center lg:justify-center">
      {children}
    </div>
  );
}
