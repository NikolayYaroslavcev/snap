export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-4 md:px-8 xl:px-10 ${className}`}>{children}</div>;
}
