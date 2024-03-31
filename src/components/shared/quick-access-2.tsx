export function QuickAccess2({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-violet-800 bg-violet-200 dark:text-violet-200 text-violet-800 font-bold rounded-lg w-full text-center py-2 text-sm flex justify-center items-center">
      {children}
    </div>
  );
}
