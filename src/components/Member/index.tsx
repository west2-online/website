import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { memberData } from "@/components/Member/memberData";

export default function Component() {
  const data = memberData
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {Object.keys(data).map((year) => (
        <div key={year} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{year}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data[year].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md"
              >
                <Avatar>
                  <img src="/placeholder.svg" alt={member.name} />
                  <AvatarFallback>{member.name.split(" ").map((word) => word[0])}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{member.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
