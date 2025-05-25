export default function Error({children}: {children: React.ReactNode}) {
  return (
    <div className="py-3 px-2 my-2 w-full text-center bg-red-100 border border-red-400 rounded-lg">
      <p className="font-(family-name:--font-dm-sans) font-medium text-red-700">{children}</p>
    </div>
  )
}