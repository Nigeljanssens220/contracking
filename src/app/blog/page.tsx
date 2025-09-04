import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Labor & Pregnancy Education",
  description:
    "Expert guides on labor preparation, contraction timing, and pregnancy tools. Learn from healthcare professionals about childbirth and labor management.",
  keywords: [
    "labor preparation",
    "pregnancy blog",
    "contraction timing guide",
    "childbirth education",
    "birth plan",
    "labor tips",
    "pregnancy tools",
    "healthcare advice",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Labor & Pregnancy Education | Contracking",
    description:
      "Expert guides on labor preparation, contraction timing, and pregnancy tools.",
    url: "https://contracking.me/blog",
    images: ["/og-image.jpg"],
  },
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  readTime: number;
  category: string;
  publishDate: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-labor-preparation",
    title: "Complete Guide to Labor Preparation",
    description:
      "Everything you need to know to prepare for labor, from early signs to hospital arrival. A comprehensive guide for expectant mothers.",
    readTime: 12,
    category: "Preparation",
    publishDate: "2024-01-15",
    featured: true,
  },
  {
    slug: "understanding-different-types-contractions",
    title: "Understanding Different Types of Contractions",
    description:
      "Learn to distinguish between Braxton Hicks, early labor, and active labor contractions. Know what to expect and when to take action.",
    readTime: 8,
    category: "Education",
    publishDate: "2024-01-10",
    featured: true,
  },
  {
    slug: "digital-tools-modern-pregnancy",
    title: "Digital Tools for Modern Pregnancy",
    description:
      "Explore how technology can support your pregnancy journey, from contraction timing to birth planning and communication with healthcare providers.",
    readTime: 6,
    category: "Technology",
    publishDate: "2024-01-05",
    featured: false,
  },
  {
    slug: "creating-birth-plan-checklist",
    title: "Creating Your Birth Plan Checklist",
    description:
      "Step-by-step guide to creating a comprehensive birth plan that communicates your preferences to your healthcare team.",
    readTime: 10,
    category: "Planning",
    publishDate: "2024-01-01",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Labor & Pregnancy Education
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert guides and educational content to help you prepare for labor
          and understand your pregnancy journey.
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Card
                key={post.slug}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Articles */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          All Articles
        </h2>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    {post.featured && <Badge variant="outline">Featured</Badge>}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Medical Disclaimer */}
      <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Medical Disclaimer:</strong> The information provided in these
          articles is for educational purposes only and should not replace
          professional medical advice. Always consult with your healthcare
          provider regarding your pregnancy and labor.
        </p>
      </div>
    </div>
  );
}

