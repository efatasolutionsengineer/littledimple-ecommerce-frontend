export default function Loading() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#86CCCB]"></div>
    </div>
  );
}

export const BasicLoading = ({children}: {children: React.ReactNode}) => (
  <div className="py-3 px-2 my-2 w-full text-center">
    <div className="flex items-center gap-2 justify-center">
      <div className="w-4 h-4 border-2 border-hijau-tua border-t-transparent rounded-full animate-spin"></div>
      <p className="font-(family-name:--font-dm-sans) font-medium text-hijau-tua">{children}</p>
    </div>
  </div>
)