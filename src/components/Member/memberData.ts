type MemberData = Record<string, {
  avatar: string;
  name: string;
  profession: string;
}[]>

export const memberData: MemberData = {
  "2023": [
    { avatar: "/placeholder-avatar.jpg", name: "John Doe", profession: "Software Engineer" },
    { avatar: "/placeholder-avatar.jpg", name: "Jane Smith", profession: "Product Manager" },
    { avatar: "/placeholder-avatar.jpg", name: "Michael Johnson", profession: "UI/UX Designer" },
    { avatar: "/placeholder-avatar.jpg", name: "Emily Davis", profession: "Data Analyst" },
  ],
  "2022": [
    { avatar: "/placeholder-avatar.jpg", name: "David Lee", profession: "Backend Developer" },
    { avatar: "/placeholder-avatar.jpg", name: "Sarah Kim", profession: "Frontend Developer" },
    { avatar: "/placeholder-avatar.jpg", name: "Tom Wilson", profession: "Project Manager" },
    { avatar: "/placeholder-avatar.jpg", name: "Olivia Chen", profession: "QA Engineer" },
  ],
  "2021": [
    { avatar: "/placeholder-avatar.jpg", name: "Alex Park", profession: "DevOps Engineer" },
    { avatar: "/placeholder-avatar.jpg", name: "Sophia Nguyen", profession: "Business Analyst" },
    { avatar: "/placeholder-avatar.jpg", name: "Ryan Gonzalez", profession: "Mobile Developer" },
    { avatar: "/placeholder-avatar.jpg", name: "Isabella Ramirez", profession: "Content Writer" },
  ],
}
