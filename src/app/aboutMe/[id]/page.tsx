

export default function page({params}:any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>aboutMe</h1>
      <h1 className="text-3xl bg-green-300 text-black">{params.id}</h1>
    </div>
  )
}
