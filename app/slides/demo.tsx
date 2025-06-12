import MDBlock from "@/components/MdBlock";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Chrome, CodeXml, Database, Globe, Rocket } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Intro",
    date: "",
    content: "Introduction to Web and HTML.",
    category: "Intro",
    relatedIds: [],
    icon: Globe,
    status: "pending" as const,
    energy: 10,
  },
  {
    id: 2,
    title: "HTML, CSS & JS",
    date: "",
    content: "Introduction to HTML, CSS & JS. Simulate Web 1.0.",
    category: "Frontend",
    relatedIds: [],
    icon: CodeXml,
    status: "pending" as const,
    energy: 20,
  },
  {
    id: 3,
    title: "Meet Next.JS",
    date: "",
    content: "Introduction to Next.js and its features. Simulate Web 2.0.",
    category: "Frontend",
    relatedIds: [],
    icon: Chrome,
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 4,
    title: "Backend & DB",
    date: "",
    content: "Using Supabase and Next.JS API routes for backend and database. Or mysql at local.",
    category: "Frontend",
    relatedIds: [],
    icon: Database,
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Release & DevOps",
    date: "",
    content: "Final deployment and release. Using Vercel for hosting.",
    category: "Release",
    relatedIds: [],
    icon: Rocket,
    status: "pending" as const,
    energy: 10,
  },
];

const slides = [
  {
    title: "What we'll learn?",
    content: (<>
      <span className="">We will learn ...</span>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </>)
  },
  {
    title: "核心观点",
    content: (<>
      <MDBlock content={`
# 123
- 123
- 134
        `} />
        </>)
  }
]

export default slides;